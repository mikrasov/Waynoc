function textNode(value =""){
    return {
        type: "text",
        value
    }
}

function htmlNode(tag , props={}, children=[]){
    return {
        type: "element",
        tagName: tag,
        properties: props,
        children: children
    }
}

function wrapIntoTree(children){
    return {
        type: "root",
        children,
        data: { quirksMode: false}
    }
}

module.exports = {
    textNode,
    htmlNode,
    wrapIntoTree,
}
