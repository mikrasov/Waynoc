const {basicAstNode} = require("./ast_util")

function replaceAstNode(node, scope){
    //note all nodes are lowercase
    switch (node.tagName) {
        case "choice":
        case "check":
            scope.lastBranch = node
            return node

        case "else":
            if(scope.lastBranch) {
                scope.lastBranch.otherwise = node.children
            }
            else {
                throw ("Else statement with no clear associated node")
            }

            return basicAstNode()

        default:
            return node
    }

}

/*
 * Depth first search of markdown AST
 * - Allows replacement of custom tags with state modifiers
 */
function findAndReplaceAstNodes(ast, scope){

    if(ast.children) ast.children.forEach((node,index)=>{
        //Replace node if needed
        if(node.type === "element" ) node = replaceAstNode(node, scope)

        //Go Deeper in the tree
        node = findAndReplaceAstNodes(node, scope)

        //Update actual tree
        ast.children[index] = node
    })
    return ast
}


function compile(ast){
    const scope = {lastBranch:null}
    return {
        ...scope,
        ast: findAndReplaceAstNodes(ast, scope )
    }
}

module.exports = {
    compile: compile,

}
