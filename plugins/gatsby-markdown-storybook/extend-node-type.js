const remark = require(`remark`)
const recommended = require('remark-preset-lint-recommended')
const _ = require(`lodash`)
const visit = require(`unist-util-visit`)
const toHAST = require(`mdast-util-to-hast`)

const stripPosition = require(`unist-util-remove-position`)
const hastReparseRaw = require(`hast-util-raw`)
const unified = require( 'unified')


function setFieldsOnGraphQLNode({ type, basePath, cache}, pluginOptions){

  if (type.name !== `MarkdownStorybook`) { return {} }

  const pathPrefixCacheStr = basePath || ``
  const htmlAstCacheKey = node => `transformer-markdown-storybook-hast-${node.internal.contentDigest}-${pathPrefixCacheStr}`


  // Takes some markdown and transform it into an HTML AST
  async function getHTMLAst(markdownNode) {
    const cachedAst = await cache.get(htmlAstCacheKey(markdownNode))

    //If in Cache return it
    if (cachedAst) return cachedAst

    const mdAst = remark()
        .use(recommended)
        .parse(markdownNode.internal.content)


    const htmlAst = toHAST(mdAst, { allowDangerousHTML: true}) // Save new HTML AST to cache and return
    const strippedHAST = hastReparseRaw(stripPosition(_.clone(htmlAst), true))

    cache.set(htmlAstCacheKey(markdownNode), strippedHAST)
    return strippedHAST

  }


  return {
    ast: {
      type: `JSON`,
      resolve(markdownNode) {
        return getHTMLAst(markdownNode)
      }
    }

  }

}


module.exports = setFieldsOnGraphQLNode
