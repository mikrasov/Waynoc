

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require('fs')


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

//This is where we create files
exports.createPages = ({ graphql, actions }) => {
    const baseDir = "./public/static/event-data/"

    const effects = []

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


    // Create Parent dir if does not exist
    if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir)

    graphql(`{
          allMarkdownRemark {
            edges {
              node {
                id
                htmlAst
                frontmatter {
                  title
                  age
                }
              }
            }
          }
        }`).then(result => {

        if (result.errors) {
            console.log(result.errors)
            return
        }

        // Create Event data files
        result.data.allMarkdownRemark.edges.forEach(({node}) => {

            //console.log("--"+node.frontmatter.title+"--")
            const eventData = {
                id: node.id,
                htmlAst: findAndReplaceAstNodes(node.htmlAst),
                age: node.frontmatter.age,
                title: node.frontmatter.title,
                effects:effects
            }


            //console.log("UPDATED AST: "+ JSON.stringify(eventData.htmlAst) )

            fs.writeFile(baseDir + node.id + ".json", JSON.stringify(eventData), {flag: "w"}, function (err) {
                if (err) return console.log("Error Writing EVENT: " + node.id);
            });

        })
    })
}

