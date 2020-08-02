const grayMatter = require(`gray-matter`)
const _ = require(`lodash`)

module.exports = async function onCreateNode({ node, loadNodeContent, actions, createNodeId, reporter, createContentDigest}, pluginOptions) {

  const { createNode, createParentChildLink} = actions

  if (_.lowerCase(node.ext) !== "mds" ) return {} // Only proccess MDS Files

  try {
    const content = await loadNodeContent(node);
    const data = grayMatter(content, pluginOptions);

    const markdownNode = {
      excerpt: data.excerpt,
      rawBody: data.content,
      id: createNodeId(`${node.id} >>> MarkdownStorybook`),
      ...data.data,
      children: [],
      parent: node.id,
      internal: {
        content: data.content,
        type: `MarkdownStorybook`
      },
    }

    if (node.internal.type === `File`) {
      markdownNode.fileAbsolutePath = node.absolutePath
      markdownNode.filename = node.name
    }

    //Create the actual node
    markdownNode.internal.contentDigest = createContentDigest(markdownNode)
    createNode(markdownNode)
    createParentChildLink({ parent: node, child: markdownNode})

    return markdownNode

  } catch (err) {
    reporter.panicOnBuild(`Error processing Markdown ${node.absolutePath ? `file ${node.absolutePath}` : `in node ${node.id}`}:\n
      ${err.message}`);
    return {}; // eslint
  }
}
