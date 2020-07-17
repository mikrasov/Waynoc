import {ACTIONS} from "../../state"
import {getCharacteristicPath, getCharacteristicHuman} from "../../util/characteristics"
import {basicAstNode} from "../ast_util"


export default function Mod (node, scope) {
    const props = node.properties
    props.value = props.value?props.value:1

    scope.effects.push({
        type: ACTIONS.PLAYER_MOD,
        path: getCharacteristicPath(props),
        value: parseInt(props.value)
    })

    const sign = props.value>0?"+":""
    const text = getCharacteristicHuman(props)

    return basicAstNode(`( ${sign}${props.value} ${text} )`, "strong")

}
