import rehypeReact from "rehype-react"
import React from "react"

import Mod from "./tags/mod"
import Choice from "./tags/choice"
import Check from "./tags/check"
import Prompt from "./tags/prompt"
import Input from "./tags/input"

import {getCharacteristic} from "../util/characteristics"

export const generateHtml = new rehypeReact({
    createElement: React.createElement,
    components: {    },
}).Compiler



function replaceAstNode(node, scope, player){
    //note all nodes are lowercase
    switch (node.tagName) {
        case "check":
            return Check(scope, node, player)
        case "mod":
            return Mod(node, scope)
        case "choice":
            return Choice(scope, node, player)
        case "prompt":
            return Prompt(scope, node)
        case "input":
            return Input(scope, node)
        default:
            return node
    }

}

/*
 * Depth first search of markdown AST
 * - Allows replacement of custom tags with state modifiers
 */
function findAndReplaceAstNodes(ast, scope, player){

    if(ast.children) ast.children.forEach((node,index)=>{
        //Replace node if needed
        if(node.type === "element" ) node = replaceAstNode(node, scope, player)

        //Go Deeper in the tree
        node = findAndReplaceAstNodes(node, scope, player)

        //Update actual tree
        ast.children[index] = node
    })
    return ast
}


/*
 * Transforms HTML AST into React Component
 */
export function compile(player, ast){
    const scope = {prompt:null, effects:[], choices:[]}
    const modifiedAst = findAndReplaceAstNodes(ast, scope, player)

    return {
        ...scope,
        parts: [generateHtml(modifiedAst)]
    }
}


export function resolveChoice(player, originalEvent, choiceNum, roll){
    const choice = originalEvent.choices[choiceNum]
    console.log(choice)

    const passed = !choice.requires || (getCharacteristic(player, choice.requires.path) + roll >= choice.requires.value)

    if(passed){
        console.log("PASSED")
        const resolution = compile(player, choice.ast )
        return {
            ...originalEvent,
            ...resolution,
            parts: [...originalEvent.parts, resolution.parts]
        }
    }
    else if(choice.otherwise){
        const resolution = compile(player, choice.otherwise )
        return {
            ...originalEvent,
            ...resolution,
            parts: [...originalEvent.parts, resolution.parts]
        }
    }

    return {
        originalEvent,
        prompt:null,
        choices:[],
        effects:[],
        parts: [...originalEvent.parts, <p>Failed.</p>]
    }

}

export function resolveInput(originalEvent, resolution){
    return {
        ...originalEvent,
        input:null,
        prompt:null,
        parts: [...originalEvent.parts, resolution]
    }
}
