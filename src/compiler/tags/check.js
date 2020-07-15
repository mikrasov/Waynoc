import {getCharacteristicPath, getCharacteristic} from "../../util/characteristics"
const {basicAstNode} = require("../ast_util")

export default function Check(scope, node, player){
    const props = node.properties
    const charPath = getCharacteristicPath(props)
    const passed = getCharacteristic(player, charPath) >= props.value

    console.log(node)
    console.log(charPath, getCharacteristic(player, charPath))
    if(passed)    return {
        ...node,
        tagName: "div",
        properties: {},
    }

    else return basicAstNode()

}
