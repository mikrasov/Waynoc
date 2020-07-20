import {basicAstNode} from "../ast_util"
import playerMeta from "../../state/player_meta"

export default function Check(scope, node, player){
    const props = node.properties
    const meta =  playerMeta(props)
    const passed = meta.getVal(player) >= props.value

    if(passed)    return {
        ...node,
        tagName: "div",
        properties: {},
    }

    else if(node.otherwise) return {
        ...node,
        tagName: "div",
        properties: {},
        children: node.otherwise
    }

    return basicAstNode()

}
