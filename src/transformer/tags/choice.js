import {basicAstNode, wrapIntoTree} from "../ast_util"
import playerMeta from "../../state/player_meta"

export default function Choice(scope, node, player){
    const props = node.properties
    const meta =  playerMeta(props)

    const requires = !meta?null:{
        ...meta,
        value: props.value
    }

    scope.choices.push({
        label: props.label,
        requires,
        ast: wrapIntoTree(node.children),
        otherwise: wrapIntoTree(node.otherwise)
    })
    return basicAstNode()
}
