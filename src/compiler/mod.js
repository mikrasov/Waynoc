import {basicAstNode} from "./ast_util"
import {ACTIONS} from "../state"

const STATS_MAP = {
    INT: "intelligence",
    PER: "perception",
    STR: "strength",
    STA: "stamina",
    PRE: "presence",
    COM: "communication",
    DEX: "dexterity",
    QUI: "quickness"

}


function modStat(scope, stat, value=1){

    const sign = value>0?"+":""
    stat = stat.toUpperCase().substr(0,3)

    scope.effects.push({
        type: ACTIONS.PLAYER_MOD_STAT,
        stat:STATS_MAP[stat],
        value: parseInt(value)
    })


    return basicAstNode(`( ${sign}${value} ${STATS_MAP[stat]} )`, "strong")
}

function modSkill(scope, skill, value=5){
    const sign = value>0?"+":""
    skill = skill.toLowerCase()

    scope.effects.push({
        type: ACTIONS.PLAYER_MOD_SKILL,
        stat: skill,
        value: parseInt(value)
    })
    return basicAstNode(`( ${sign}${value} in ${skill} )`, "strong")
}

function modRelationship(scope, person, value=5){
    const sign = value>0?"+":""
    person = person.toLowerCase()

    scope.effects.push({
        type: ACTIONS.PLAYER_MOD_RELATIONSHIP,
        stat: person,
        value: parseInt(value)
    })
    return basicAstNode(`( ${sign}${value}  relationship with ${person} )`, "strong")
}


export default function Mod (node, scope) {
    const props = node.properties

    if(props.stat)
        return modStat(scope, props.stat, props.value)

    if(props.skill)
        return modSkill(scope, props.skill, props.value)

    if(props.person)
        return modRelationship(scope, props.person, props.value)

    console.log("Warning! Unknown tag: "+node)
    return basicAstNode()
}
