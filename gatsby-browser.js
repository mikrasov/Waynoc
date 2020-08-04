/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

//Swap with persistentStore to re-enable local storage
export { temporaryStore as wrapRootElement } from './src/state/redux_wrapper'
