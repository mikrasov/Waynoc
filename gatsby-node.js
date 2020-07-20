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

        createNodeField({
            node,
            name: `type`,
            value: path[0],
        })


        if(path[0] === "events") {
            createNodeField({
                node,
                name: `event-category`,
                value: path[1],
            })

            age_str = path[2].split("-")

            createNodeField({
                node,
                name: `age`,
                value: parseFloat(age_str[0])+parseFloat((age_str[1]-1)*0.25),
            })
        }
    }
}
