import {getCharacteristicPath, getCharacteristic} from "../../util/characteristics"
import {basicAstNode} from "../ast_util"

export default function Check(scope, node, player){
    const props = node.properties
    const charPath = getCharacteristicPath(props)
    const passed = getCharacteristic(player, charPath) >= props.value

    if(passed)    return {
        ...node,
        tagName: "div",
        properties: {},
    }

    else if(node.otherwise) return {
        ...node,
        tagName: "div",
        properties: {},
        children: node.otherwise
    }

    return basicAstNode()

}
