/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const fs = require('fs')
const event_compiler = require('./src/state/event_compiler')


//This is where we create files
exports.createPages = ({ graphql, actions }) => {
    const baseDir = "./public/static/event-data/"


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

            const eventData = event_compiler.construct(node)

            fs.writeFile(baseDir + node.id + ".json", JSON.stringify(eventData), {flag: "w"}, function (err) {
                if (err) return console.log("Error Writing EVENT: " + node.id);
            });

        })
    })
}

