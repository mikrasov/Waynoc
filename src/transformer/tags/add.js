import {ACTIONS} from "../../state"
import {infoNode} from "../ast_util"

import playerMeta from "../../state/player_meta";

export default function Add (node, scope) {
    const props = node.properties
    const meta =  playerMeta(props)

    props.value = props.value? props.value : meta.step

    scope.effects.push({
        ...meta,
        type: ACTIONS.PLAYER_MOD,
        value: parseInt(props.value)
    })


    return infoNode(meta.name, meta.field, props.value, meta.isBinary())

}
