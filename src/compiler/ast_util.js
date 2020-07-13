import rehypeReact from "rehype-react"
import React from "react"


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

export function wrapIntoTree(children){

    return {
        type: "root",
        children,
        data: { quirksMode: false}
    }

}

export const generateHtml = new rehypeReact({
    createElement: React.createElement,
    components: {    },
}).Compiler
