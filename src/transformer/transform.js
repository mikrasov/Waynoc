import Check from "./tags/check"
import Choice from "./tags/choice"
import Else from "./tags/else"
import Input from "./tags/input"
import Add from "./tags/add"
import Prompt from "./tags/prompt"
import Remove from "./tags/remove";

function firstPassReplacer(node, scope){
    //note all nodes are lowercase
    switch (node.tagName) {
        case "choice":
        case "check":
            scope.lastBranch = node
            return node

        case "else":
            return Else(scope,node)
        default:
            return node
    }

}

function secondPassReplacer(node, scope, player){
    //note all nodes are lowercase
    switch (node.tagName) {
        case "check":
            return Check(scope, node, player)
        case "add":
            return Add(node, scope)
        case "remove":
            return Remove(node, scope)
        case "set":
            return Remove(node, scope)
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
function findAndReplaceAstNodes(ast, scope, player, replacer){

    try {
        if (ast.children) ast.children.forEach((node, index) => {
            //Replace node if needed
            if (node.type === "element") node = replacer(node, scope, player)

            //Go Deeper in the tree
            node = findAndReplaceAstNodes(node, scope, player, replacer)

            //Update actual tree
            ast.children[index] = node
        })
    }
    catch (e) {
        console.log(e)
    }

    return ast
}


export function firstPassTransform(ast){
    const scope = {lastBranch:null}
    return findAndReplaceAstNodes(ast, scope, null, firstPassReplacer)
}

/*
 * Transforms HTML AST into React Component
 */
export function secondPassTransform(player, ast, generateHtml){
    const scope = {prompt:null, effects:[], choices:[]}
    const modifiedAst = findAndReplaceAstNodes(ast, scope, player, secondPassReplacer)

    return {
        ...scope,
        prompt: scope.prompt?generateHtml(scope.prompt):null,
        parts: [generateHtml(modifiedAst)]
    }
}
