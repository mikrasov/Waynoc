const tags = require(`./tags`)


function visit(ast, state, scope={}){

    if (ast.children) ast.children.forEach((node, index) => {


        //Replace node if needed
        if (node.type === "element" && node.tagName in tags)
            ast.children[index] = tags[node.tagName](node, scope, state)

        //Go Deeper in the tree
        visit(node, state, scope)

    })

    return ast

}

export default function secondPass(ast, state) {
    const scope = {prompt:null, effects:[], choices:[]}

    return {
        ast: visit(ast,state,scope),
        ...scope
    }
}

