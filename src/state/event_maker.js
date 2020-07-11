
const effects = []

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

    if(node.tagName === "increasestat"){
        const effect =  {
            type: "redux action here",
            stat:node.properties.stat,
            value: 1,
        }

        return basicHtmlText("+1 "+node.properties.stat, "strong")
    }

    return node
}

function findAndReplaceAstNodes(ast, prefix=""){

    if(ast.children) ast.children.forEach((node,index)=>{
        //console.log(prefix+index + " "+ JSON.stringify(node))

        //Replace node if needed
        if(node.type === "element" ) node = replaceAstNode(node)

        //Go Deeper in the tree
        node = findAndReplaceAstNodes(node, prefix+"-")

        //Update actual tree
        ast.children[index] = node
    })


    return ast
}


function construct(node){

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


