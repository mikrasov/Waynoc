const _ = require(`lodash`)
const remark = require(`remark`)
const mdast2hast = require(`mdast-util-to-hast`)
const stripPosition = require(`unist-util-remove-position`)
const hastReparseRaw = require(`hast-util-raw`)
const mdsTransform = require(`./transformer-firstpass`)


module.exports = function({ type, basePath, cache}, pluginOptions){

  if (type.name !== `MarkdownStorybook`) { return {} }

  const pathPrefixCacheStr = basePath || ``
  const htmlAstCacheKey = (node) => `transformer-markdown-storybook-hast-${node.internal.contentDigest}-${pathPrefixCacheStr}`

  // Takes some markdown and transform it into an HTML AST
  async function getAst(markdownNode) {
    const cachedAst = await cache.get(htmlAstCacheKey(markdownNode))

    //If in Cache return it
    if (cachedAst) return cachedAst


    // Markdown -> MD AST
    const mdAst = remark().parse(markdownNode.internal.content)
    // MD AST -> HTML AST
    const htmlAst = mdast2hast(mdAst, { allowDangerousHTML: true})
    // HTML AST -> Cleaned HTML AST
    const strippedHAST = hastReparseRaw(stripPosition(_.clone(htmlAst), true))

    const msAst = mdsTransform(markdownNode, strippedHAST)

    cache.set(htmlAstCacheKey(markdownNode), msAst)
    return msAst
  }



  return {
    hast: {
      type: `JSON`,
      resolve(markdownNode) {
        return getAst(markdownNode)
      }
    }

  }

}
