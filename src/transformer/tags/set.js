import {ACTIONS} from "../../state"
import {infoNode, basicAstNode} from "../ast_util"

import playerMeta from "../../state/player_meta";

export default function Set (node, scope) {
    const props = node.properties
    const meta =  playerMeta(props)

    props.value = props.value? props.value : meta.step

    scope.effects.push({
        ...meta,
        type: ACTIONS.PLAYER_SET,
        value: parseInt(props.value)
    })


    if(! ("silent" in props) )
        return infoNode(meta.name, meta.field, props.value, true)
    else return basicAstNode()
}
