/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require('fs')
const pre_compiler = require("./src/compiler/pre_compile")





//This is where we create files
exports.createPages = ({ graphql, actions, createContentDigest  }) => {
    const baseDir = "./public/static/event_data/"

    // Create Parent dir if does not exist
    if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir)

    graphql(`{
          allMarkdownRemark {
            edges {
              node {
                id
                htmlAst
                fileAbsolutePath
                frontmatter {
                  title
                  age
                }
              }
            }
          }
        }`).then(result => {

        if (result.errors) throw result.errors

        // Create Event data files
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
            try {

                const results = pre_compiler.compile(node.htmlAst)
                const eventData = {
                    id: node.id+"_EVT",
                    ...node.frontmatter,
                    ...results,
                }
                fs.writeFile(baseDir + node.id + ".json", JSON.stringify(eventData), {flag: "w"}, function (err) {
                    if (err) throw "Error Writing EVENT "
                });
            }
            catch(err) {
                console.log("WARNING problem parsing file "+node.fileAbsolutePath+" as "+node.id)
                console.log(err)
            }
        })
    })
}

