import Mod from "./tags/mod"
import Choice from "./tags/choice"
import Check from "./tags/check"
import Prompt from "./tags/prompt"
import Input from "./tags/input"

import rehypeReact from "rehype-react"
import React from "react"

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

export function compile(player, rawEvent){
    const scope = {prompt:null, effects:[], choices:[], lastBranch:null}
    const ast = findAndReplaceAstNodes(rawEvent.ast, scope, player)

    const event = {
        ...rawEvent,
        ...scope,
        parts: [generateHtml(ast)]
    }
    delete event.ast //no longer need the AST
    delete event.lastBranch // also no longer needed

    return event
}


export function resolveChoice(player, originalEvent, choiceNum){
    const choice = compile(player, originalEvent.choices[choiceNum])

    return {
        ...originalEvent,
        ...choice,
        parts: [...originalEvent.parts, choice.parts]
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
