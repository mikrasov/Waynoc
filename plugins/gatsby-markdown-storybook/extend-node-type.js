const remark = require(`remark`)
const recommended = require('remark-preset-lint-recommended')
const _ = require(`lodash`)
const visit = require(`unist-util-visit`)
const toHAST = require(`mdast-util-to-hast`)
const hastToHTML = require(`hast-util-to-html`)
const Promise = require(`bluebird`)
const stripPosition = require(`unist-util-remove-position`)
const hastReparseRaw = require(`hast-util-raw`)
const remark2react = require( 'remark-react')
const remark2html = require( 'remark-html')

function buildNode({ type, basePath, cache}, pluginOptions){

  if (type.name !== `MarkdownStorybook`) { return {} }

  const pathPrefixCacheStr = basePath || ``
  const htmlAstCacheKey = node => `transformer-markdown-storybook-hast-${node.internal.contentDigest}-${pathPrefixCacheStr}`



  return new Promise((resolve, reject) => {

    async function getHTMLAst(markdownNode) {
      const cachedAst = await cache.get(htmlAstCacheKey(markdownNode))

      //If in Cache return it
      if (cachedAst) return cachedAst

      const mdAst = remark()
          .use(recommended)
          //.use(remark2html)
          .parse(markdownNode.internal.content)

      //const htmlAst = mdAst

      const htmlAst = toHAST(mdAst, { allowDangerousHTML: true}) // Save new HTML AST to cache and return

      cache.set(htmlAstCacheKey(markdownNode), htmlAst)
      return htmlAst

    }

    //      const html = hastToHTML(ast, {allowDangerousHTML: true}) // Save new HTML to cache

    return resolve({
      ast: {
        type: `JSON`,
        resolve(markdownNode) {
          return getHTMLAst(markdownNode).then(ast => {

            const strippedAst = stripPosition(_.clone(ast), true)
            return hastReparseRaw(strippedAst)
          })
        }
      }

    })
  })
}


module.exports = buildNode
