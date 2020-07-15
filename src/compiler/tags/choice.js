import {characteristicCheck, getCharacteristic, getCharacteristicPath} from "../../util/characteristics"
const {basicAstNode, wrapIntoTree} = require("../ast_util")

export default function Choice(scope, node, player){
    const props = node.properties
    const charPath = getCharacteristicPath(props)
    const passed = getCharacteristic(player, charPath) >= props.value

    scope.choices.push({
        label: props.title,
        ast: wrapIntoTree(node.children)
    })
    return basicAstNode()
}
