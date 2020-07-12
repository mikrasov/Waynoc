const ACTIONS = require('./actions')
const clone = require('lodash.clonedeep')

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




function basicAstNode(value ="", tag = ""){

    if(tag) return {
        "type": "element",
        "tagName": tag,
        "properties": {},
        "children": [
            {
                "type": "text",
                "value": value
            }
        ]
    }
    else return {"type": "text", "value": value}

}

function basicAstTree(value, tag){

    return {
        type: "root",
        children: [basicAstNode(value,tag)],
        data: { quirksMode: false}

    }

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



function availableChoice(scope, node, title,){

    const result = findAndReplaceAstNodes(node, {effects:[], choices:[]})

    scope.choices.push({
        title,
        resolution: {
            type: "element",
            tagName: "div",
            properties: {},
            children:result.ast.children
        },
        effects: result.effects,
        choices: result.choices
    })
    return basicAstNode()
}




function replaceAstNode(node, scope){
    let props = node.properties

    //note all nodes are lowercase
    switch (node.tagName) {
        case "mod":
            if(props.stat)
                return modStat(scope, props.stat, props.value)

            if(props.skill)
                return modSkill(scope, props.skill, props.value)

            if(props.person)
                return modRelationship(scope, props.person, props.value)

            console.log("Warning! Unknown tag: "+node)
            return basicAstNode()
        case "choice":
            return availableChoice(scope, node, props.title)

        default:
            return node
    }

}

/*
 * Depth first search of markdown AST
 * - Allows replacement of custom tags with state modifiers
 */
function findAndReplaceAstNodes(ast, scope){

    if(ast.children) ast.children.forEach((node,index)=>{
        //Replace node if needed
        if(node.type === "element" ) node = replaceAstNode(node, scope)

        //Go Deeper in the tree
        node = findAndReplaceAstNodes(node, scope).ast

        //Update actual tree
        ast.children[index] = node
    })
    return {...scope, ast}
}


/*
 * Builds and return the final event node to be stored in static final json file
 */
function construct(node){

    const scope = {effects:[], choices:[]}
    const result = findAndReplaceAstNodes(node.htmlAst, scope)

    //console.log("--"+node.frontmatter.title+"--")
    return {
        id: node.id,
        htmlAst: result.ast,
        age: node.frontmatter.age,
        title: node.frontmatter.title,
        effects: result.effects,
        choices: result.choices
    }

}


function resolveEvent(originalEvent, choiceNum){

    const event = clone(originalEvent)
    const choice = event.choices[choiceNum]

    event.effects = choice.effects
    event.choices = choice.choices
    event.htmlAst.children.push(choice.resolution)

    return event
}

//Export to Non ES6 Sections of code like gatsby-node.js :(
module.exports = {
    construct: construct,
    resolveEvent: resolveEvent,
    basicAstTree: basicAstTree

}


