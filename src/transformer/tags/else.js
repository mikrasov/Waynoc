import {basicAstNode} from "../ast_util"

export default function Prompt(scope, node){
    if(scope.lastBranch) {
        scope.lastBranch.otherwise = node.children
        return basicAstNode()
    }

    throw new Error("Else statement with no clear associated node")
}
