import {getCharacteristicPath} from "../../util/characteristics"
const {basicAstNode, wrapIntoTree} = require("../ast_util")

export default function Choice(scope, node, player){
    const props = node.properties
    const charPath = getCharacteristicPath(props)

    const requires = !charPath?null:{
        path: charPath,
        value: props.value
    }

    scope.choices.push({
        label: props.title,
        requires,
        ast: wrapIntoTree(node.children)
    })
    return basicAstNode()
}
