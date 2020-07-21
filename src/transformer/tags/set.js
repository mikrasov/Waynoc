import {ACTIONS} from "../../state"
import {infoNode, basicAstNode} from "../ast_util"

import playerMeta from "../../state/player_meta";

export default function Set (node, scope) {
    const props = node.properties
    const meta =  playerMeta(props)

    if(meta.isNumeric)
        props.value = props.value? parseInt(props.value) : meta.step
    else if( !("value" in props) ) throw new Error("No value passed to SET tag for non numeric field")

    scope.effects.push({
        ...meta,
        type: ACTIONS.PLAYER_SET,
        value: props.value
    })

    if(! ("silent" in props) )
        return infoNode(meta.name, meta.field, props.value, true)
    else return basicAstNode()
}
