/*
 * Translates between MDS tag props and Player characteristics
 */
const _ = require("lodash")

const STATS_MAP = {
    INT: "intelligence",
    PER: "perception",
    STR: "strength",
    STA: "stamina",
    CHA: "charisma",
    COM: "communication",
    DEX: "dexterity",
    SPD: "speed"

}

const characteristic = {
    name:"",
    field:"",
    pathPrefix:"",
    pathSuffix: "",
    initial: 0,
    step:1,
    min: 0,
    max: Number.MAX_VALUE,
    clearOnMin: true,
    isNumeric: true,

    //Note has to be in this notation, arrow notation will cause error when using "this" keyword
    rootPath(){return this.pathPrefix + this.field},
    path(){ return this.pathPrefix+ this.field + this.pathSuffix},
    isBinary(){return (this.max - this.min) ===1 },
    sideEffect(player, value){},

    getVal(player) {return _.get(player, this.path(), this.initial)},

    modVal(player, value) {
        const copy = _.cloneDeep(player)
        const newVal = _.get(copy, this.path(), 0) + value

        if( newVal >= this.min && newVal <= this.max ){
            _.set(copy, this.path(), newVal)
            this.sideEffect(copy, newVal)
        }
        if( this.clearOnMin && newVal <= this.min && _.has(copy, this.path())){
            _.unset(copy,this.rootPath()) // removes the object entirely
        }
        return copy
    },

    setVal(player, value) {
        const copy = _.cloneDeep(player)
        _.set(copy, this.path(), value)
        this.sideEffect(copy, value)
        return copy
    }

}

export default function(props) {

    if("name" in props) return {
        ...characteristic,
        name: "name",
        field: "name",
        isNumeric: false
    }

    if("gender" in props) return {
        ...characteristic,
        name: "gender",
        field: "gender",
        isNumeric: false
    }

    if("money" in props) return {
        ...characteristic,
        name: "money",
        field: "money",
    }

    if("morale" in props) return {
        ...characteristic,
        name: "morale",
        field: "morale",
        max: 100
    }

    if(props.stat) return {
        ...characteristic,
        name: "stat",
        field: STATS_MAP[props.stat.toUpperCase()],
        pathPrefix: "stats.",
        max: 20
    }

    if(props.skill) return {
        ...characteristic,
        name: "skill",
        field: props.skill.toLowerCase(),
        pathPrefix: "skills.",
        pathSuffix: ".xp",
        step: 15,
        sideEffect(copy, xp){
            // quadratic formula for each level costing 1 xp more than previous
            const newVal = Math.floor((Math.sqrt(8 * xp + 1) - 1)/2)
            _.set(copy, this.rootPath()+".value", newVal)
        },
    }

    if(props.relationship) return {
        ...characteristic,
        name: "relationship",
        field: props.relationship.toLowerCase(),
        pathPrefix: "relationships.",
        pathSuffix: ".closeness",
        step: 5
    }

    if(props.item) return {
        ...characteristic,
        name: "item",
        field: props.item.toLowerCase(),
        pathPrefix: "items.",
        max: 1
    }

    if(props.tag) return {
        ...characteristic,
        name: "tag",
        field: props.tag.toLowerCase(),
        pathPrefix: "tags.",
        max: 1
    }

    if(props.flag) return {
        ...characteristic,
        name: "flag",
        field: props.flag.toLowerCase(),
        pathPrefix: "flags.",
        max: 1
    }

    if(props.job) return {
        ...characteristic,
        name: "job",
        field: props.job.toLowerCase(),
        pathPrefix: "jobs.",
        max: 1
    }

    return null
}
