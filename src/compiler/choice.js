import {basicAstNode} from "./ast_util"

export default function Choice(scope, node){
    const props = node.properties

    scope.choices.push({
        title: props.title,
        ast: {
            type: "root",
            children: node.children,
            data: { quirksMode: false}
        }
    })
    return basicAstNode()
}
