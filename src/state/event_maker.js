const ACTIONS = require('./actions')

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


let effects = []


function increaseStat(stat, value=1){

    stat = stat.toUpperCase().substr(0,3)

    effect = {
        type: ACTIONS.PLAYER_INCREASE_STAT,
        stat:STATS_MAP[stat],
        value,
    }

    effects.push(effect)
    return basicHtmlText("(+"+value+" "+STATS_MAP[stat]+")", "strong")
}



function basicHtmlText(value ="", tag = ""){

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

function replaceAstNode(node){
    let props = node.properties

    //note all nodes are lowercase
    switch (node.tagName) {
        case "increasestat":
            return increaseStat(props.stat, props.value)

        default:
            return node
    }

}

/*
 * Depth first search of markdown AST
 * - Allows replacement of custom tags with state modifiers
 */
function findAndReplaceAstNodes(ast){
    if(ast.children) ast.children.forEach((node,index)=>{
        //Replace node if needed
        if(node.type === "element" ) node = replaceAstNode(node)

        //Go Deeper in the tree
        node = findAndReplaceAstNodes(node)

        //Update actual tree
        ast.children[index] = node
    })
    return ast
}


/*
 * Builds and return the final event node to be stored in static final json file
 */
function construct(node){

    effects = []

    //console.log("--"+node.frontmatter.title+"--")
    const eventData = {
        id: node.id,
        htmlAst: findAndReplaceAstNodes(node.htmlAst),
        age: node.frontmatter.age,
        title: node.frontmatter.title,
        effects:effects
    }

    //console.log("UPDATED AST: "+ JSON.stringify(eventData.htmlAst) )
    return eventData
}

module.exports = {
    construct: construct
}


