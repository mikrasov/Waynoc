import {ACTIONS} from "../../state"
import {basicAstNode, infoNode} from "../ast_util"

import playerMeta from "../../state/player_meta";

export default function Add (node, scope) {
    const props = node.properties
    const meta =  playerMeta(props)

    if(!meta.isNumeric) throw new Error("Attempting to ADD to non numeric field.")

    props.value = props.value? parseInt(props.value) : meta.step

    scope.effects.push({
        ...meta,
        type: ACTIONS.PLAYER_MOD,
        value: props.value
    })

    if(! ("silent" in props) )
        return infoNode(meta.name, meta.field, props.value, meta.isBinary())
    else return basicAstNode()
}
