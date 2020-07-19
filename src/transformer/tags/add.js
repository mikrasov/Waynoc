import {ACTIONS} from "../../state"
import {getCharacteristicPath, getCharacteristicHuman} from "../../util/characteristics"
import {basicAstNode} from "../ast_util"


export default function Add (node, scope) {
    const props = node.properties
    props.value = props.value?props.value:1

    if (props.skill) {
        scope.effects.push({
            type: ACTIONS.PLAYER_MOD_SKILL,
            name: props.skill.toLowerCase(),
            xp: parseInt(props.value)
        })
    }
    else {
        scope.effects.push({
            type: ACTIONS.PLAYER_MOD,
            path: getCharacteristicPath(props),
            value: parseInt(props.value)
        })
    }

    const sign = props.value>0?"+":""
    const text = getCharacteristicHuman(props)

    return basicAstNode(`( ${sign}${props.value} ${text} )`, "strong")

}
