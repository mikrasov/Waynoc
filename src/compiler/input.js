import {basicAstNode} from "./ast_util"


export default function Input(scope, node){
    const props = node.properties

    if(props.type){
        scope.input = props.type
        return basicAstNode()
    }

    console.log("Warning! Unknown Input Type: ", node)
    return basicAstNode()
}
