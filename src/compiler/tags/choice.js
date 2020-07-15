const {basicAstNode, wrapIntoTree} = require("../ast_util")


export default function Choice(scope, node){
    const props = node.properties

    scope.choices.push({
        label: props.title,
        ast: wrapIntoTree(node.children)
    })
    return basicAstNode()
}
