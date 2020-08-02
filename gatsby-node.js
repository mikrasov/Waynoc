/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    // Ensures we are processing only markdown files
    if (node.internal.type === "MarkdownRemark") {
        const path = createFilePath({ node, getNode }).slice(1,-1).split("/")



        if(path[0] === "events") {
            age_str = path[2].slice(0,4).split("-")

            createNodeField({node, name: `file`, value: path[2] })
            createNodeField({node, name: `type`, value: "events" })
            createNodeField({node, name: `event-category`, value: path[1]  })
            createNodeField({node, name: `age`, value: parseFloat(age_str[0])+parseFloat((age_str[1])*0.25) })
        }
        else {
            createNodeField({node, name: `type`, value: "characteristics"})
            createNodeField({node, name: `name`, value: path[0]})
            createNodeField({node, name: `field`, value: path[1]})
        }


    }
}
