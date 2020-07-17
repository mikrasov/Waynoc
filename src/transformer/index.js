import {getCharacteristic} from "../util/characteristics"
import {firstPassTransform, secondPassTransform} from "./transform"
import {basicAstNode, wrapIntoTree} from "./ast_util"

export function resolveEvent(player, eventAst, generateHtml){
    return secondPassTransform(player, firstPassTransform(eventAst), generateHtml)
}

export function resolveChoice(player, originalEvent, choiceNum, roll, generateHtml){
    const choice = originalEvent.choices[choiceNum]
    const passed = !choice.requires || (getCharacteristic(player, choice.requires.path) + roll >= choice.requires.value)

    if(passed){
        const resolution = secondPassTransform(player, choice.ast, generateHtml)
        return {
            ...originalEvent,
            ...resolution,
            parts: [...originalEvent.parts, resolution.parts]
        }
    }
    else if(choice.otherwise){
        const resolution = secondPassTransform(player, choice.otherwise, generateHtml)
        return {
            ...originalEvent,
            ...resolution,
            parts: [...originalEvent.parts, resolution.parts]
        }
    }

    return {
        originalEvent,
        prompt:null,
        choices:[],
        effects:[],
        parts: [...originalEvent.parts, wrapIntoTree(basicAstNode("Failed"))]
    }

}

export function resolveInput(originalEvent, resolution){
    return {
        ...originalEvent,
        input:null,
        prompt:null,
        parts: [...originalEvent.parts, resolution]
    }
}
