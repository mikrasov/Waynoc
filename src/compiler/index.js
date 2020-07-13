import React from "react"
import rehypeReact from "rehype-react"
import Mod from "./mod"
import Choice from "./choice";

const clone = require("lodash.clonedeep")


const generateHtml = new rehypeReact({
    createElement: React.createElement,
    components: {  },
}).Compiler


function replaceAstNode(node, scope){
    //note all nodes are lowercase
    switch (node.tagName) {
        case "mod":
            return Mod(node, scope)
        case "choice":
            return Choice(scope, node)
        default:
            return node
    }

}

/*
 * Depth first search of markdown AST
 * - Allows replacement of custom tags with state modifiers
 */
function findAndReplaceAstNodes(ast, scope){


    if(ast.children) ast.children.forEach((node,index)=>{
        //Replace node if needed
        if(node.type === "element" ) node = replaceAstNode(node, scope)

        //Go Deeper in the tree
        node = findAndReplaceAstNodes(node, scope)

        //Update actual tree
        ast.children[index] = node
    })
    return ast
}


/*
 * Transforms HTML AST into React Component
 */

export function compile(rawEvent){
    const scope = {effects:[], choices:[]}
    const ast = findAndReplaceAstNodes(rawEvent.ast, scope)

    const event = {
        ...rawEvent,
        ...scope,
        parts: [generateHtml(ast)]
    }

    return event

}


export function resolveEvent(originalEvent, choiceNum){
    const event = clone(originalEvent)
    const choice = compile(event.choices[choiceNum])

    event.effects = choice.effects
    event.choices = choice.choices
    event.parts.push(choice.parts[0]) //add HTML from choice

    return event
}
