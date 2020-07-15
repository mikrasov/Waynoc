import {STATS_MAP} from "../attr_maps"
const {basicAstNode} = require("../ast_util")

export default function Check(scope, node, player){
    const props = node.properties

    let passed = true


    console.log(player)

    if(props.stat){
        const stat = STATS_MAP[props.stat.toUpperCase().substr(0,3)]
        passed = player?.[stat] >= props.value
    }
    else if(props.skill) {
        const stat = props.skill.toLowerCase()
        passed = player?.skills?.[stat] >= props.value
    }
    else if(props.relationship) {
        const stat = props.relationship.toLowerCase()
        passed = player?.relationships?.[stat] >= props.value
    }



    if(passed)    return {
        ...node,
        tagName: "div",
        properties: {},
    }

    else return basicAstNode()

}
