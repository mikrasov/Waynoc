import {basicAstNode, wrapIntoTree, generateHtml} from "./ast_util"

export default function Prompt(scope, node){
    scope.prompt = generateHtml(wrapIntoTree(node.children))
    return basicAstNode()
}
