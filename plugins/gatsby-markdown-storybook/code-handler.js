const defaultHandler = require(`mdast-util-to-hast/lib/handlers/code`)

module.exports = function (h, node) {
  const result = defaultHandler(h, node)

  if (node.meta && result.children[0]) {
    result.children[0].properties.dataMeta = node.meta
  }

  return result
}
