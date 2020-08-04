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

        createNodeField({node, name: `type`, value: "characteristics"})
        createNodeField({node, name: `name`, value: path[0]})
        createNodeField({node, name: `field`, value: path[1]})

    }
}
