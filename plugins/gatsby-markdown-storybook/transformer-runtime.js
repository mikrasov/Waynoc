const tags = require(`./tags`)

function visit(ast, state, scope){

    if (ast.children) ast.children.forEach((node, index) => {

        //Replace node if needed
        if (node.type === "element" && node.tagName in tags) {
            node = tags[node.tagName](node, scope, state)
            ast.children[index] = node
        }

        //Go Deeper in the tree
        visit(node, state, scope)

    })

    return ast
}

export default function (ast, state) {
    const scope = {prompt:null, effects:[], choices:[]}

    return {
        parts:[ visit(ast,state,scope) ],
        ...scope
    }

}

