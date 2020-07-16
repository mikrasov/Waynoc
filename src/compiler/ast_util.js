/*
 *  Note these helper functions for AST construction that should be accessible from lower down code that may not be
 *  ES6 compatible
 */

function basicAstNode(value ="", tag = ""){

    if(tag) return {
        type: "element",
        tagName: tag,
        properties: { },
        children: [
            {
                type: "text",
                value: value
            }
        ]
    }
    else return {type: "text", value: value}

}

function wrapIntoTree(children){

    return {
        type: "root",
        children,
        data: { quirksMode: false}
    }
}

module.exports = {
    wrapIntoTree: wrapIntoTree,
    basicAstNode: basicAstNode
}
