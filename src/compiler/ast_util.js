

export function basicAstNode(value ="", tag = ""){

    if(tag) return {
        type: "element",
        tagName: tag,
        properties: {},
        children: [
            {
                type: "text",
                value: value
            }
        ]
    }
    else return {type: "text", value: value}

}

export function basicAstTree(value, tag){

    return {
        type: "root",
        children: [basicAstNode(value,tag)],
        data: { quirksMode: false}

    }

}
