const lodash = require("lodash")

export const STATS_MAP = {
    INT: "intelligence",
    PER: "perception",
    STR: "strength",
    STA: "stamina",
    CHA: "charisma",
    COM: "communication",
    DEX: "dexterity",
    SPD: "speed"

}

export function modCharacteristic(player, path, value) {
    const copy = lodash.cloneDeep(player)
    const prefix = path.split(".",1)
    const newVal = lodash.get(copy, path, 0) + value

    if( newVal > 0 || prefix ==="money"|| prefix ==="morale"|| prefix ==="stats"|| prefix ==="relationship"){
        lodash.set(copy, path, newVal)
    }
    else if(lodash.has(copy, path)){
        lodash.unset(copy,path) // removes the object entirely
    }
    return copy
}

export function setCharacteristic(player, path, value) {
    const copy = lodash.cloneDeep(player)
    lodash.set(copy, path, value)
    return copy
}

export function getCharacteristic(player, path) {
    return lodash.get(player, path, 0)
}


export function getCharacteristicPath(props) {

    if("money" in props)
        return "money"

    if("morale" in props)
        return "morale"

    if(props.stat)
        return "stats."+STATS_MAP[props.stat.toUpperCase()]

    if(props.skill)
        return "skills."+props.skill.toLowerCase()

    if(props.relationship)
        return "relationships."+props.relationship.toLowerCase()+"closeness"

    if(props.item)
        return "items."+props.item.toLowerCase()

    if(props.tag)
        return "tags."+props.tag.toLowerCase()

    if(props.flag)
        return "flags."+props.flag.toLowerCase()

    if(props.job)
        return "jobs."+props.job.toLowerCase()

    return ""
}

export function getCharacteristicHuman(props) {

    if(props.stat)
        return lodash.upperFirst(STATS_MAP[props.stat.toUpperCase()])

    if(props.skill)
        return lodash.upperFirst(props.skill.toLowerCase() )+ " Skill"

    if(props.relationship)
        return "Relationship with " + lodash.upperFirst(props.relationship.toLowerCase() )

    console.log("WARNING: Unable to construct human characteristic name from props ", props)
}
