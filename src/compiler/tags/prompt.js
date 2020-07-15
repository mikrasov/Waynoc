import {generateHtml} from "../index"
const {basicAstNode, wrapIntoTree} = require("../ast_util")

export default function Prompt(scope, node){
    scope.prompt = generateHtml(wrapIntoTree(node.children))
    return basicAstNode()
}
