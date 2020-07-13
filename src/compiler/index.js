import {generateHtml} from "./ast_util"
import Mod from "./mod"
import Choice from "./choice"
import Prompt from "./prompt"
import Input from "./input"


function replaceAstNode(node, scope){
    //note all nodes are lowercase
    switch (node.tagName) {
        case "mod":
            return Mod(node, scope)
        case "choice":
            return Choice(scope, node)
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
    const scope = {prompt:null, effects:[], choices:[]}
    const ast = findAndReplaceAstNodes(rawEvent.ast, scope)

    const event = {
        ...rawEvent,
        ...scope,
        parts: [generateHtml(ast)]
    }
    delete event.ast //no longer need the AST

    return event
}


export function resolveChoice(originalEvent, choiceNum){

    const choice = compile(originalEvent.choices[choiceNum])

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
