import {basicAstNode, wrapIntoTree} from "../ast_util"

export default function Prompt(scope, node){
    scope.prompt = wrapIntoTree(node.children)
    return basicAstNode()
}
