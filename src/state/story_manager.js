import {transform} from "../../plugins/gatsby-markdown-storybook"
import _ from "lodash"
import {readyStats} from "./stats_manager";

function processEffect(stats, statsMeta, {type, stat, value}){

    const currentVal = _.get(stats, stat)
    const statMeta = _.get(statsMeta, stat)

    console.log(type, stat, value)

    value = parseInt(value)

    if (type === "mod")  value =  currentVal + value

    value = Math.max(statMeta.min, value)
    value = Math.min(statMeta.max, value)

    _.set(stats, stat, value)

}

function readyEvent(state, filename){
    if(! (filename in state.events)) filename = "404"

    const selectedEvent = state.events[filename]
    const event = {
        ...selectedEvent,
        ...transform(selectedEvent.hast, state)
    }
    delete event.hast


    //Process Effects
    const modifiedStats = _.cloneDeep(state.stats)
    event.effects.forEach(e=> processEffect(modifiedStats,state.stats_meta,e))
    delete event.effects


    return {
        ...state,
        stats: modifiedStats,
        activeEvent: event
    }
}

export function firstEvent(state, events, statsMeta)  {
    const loadedState = {
        ...state,
        dataLoaded: true,
        ...readyStats(statsMeta),
        events: _.keyBy(events, 'filename')
    }
    return readyEvent(loadedState,"index")
}


export function nextEvent(state)  {
    return readyEvent(state, state.activeEvent.next)
}

export function makeChoice(state, choiceNum, diceRoll)  {
    const currentEvent = state.activeEvent
    const choice = currentEvent.choices[choiceNum]

    let ast = choice.selected
    //Do active check
    if(choice?.stat && choice.stat+diceRoll < choice.value){
        ast = choice.otherwise
    }

    const parsedChoice = transform(ast)

    //Process Effects
    const modifiedStats = _.cloneDeep(state.stats)
    parsedChoice.effects.forEach(e=> processEffect(modifiedStats,state.stats_meta,e))

    const res = {
        ...state,
        stats: modifiedStats,
        activeEvent: {
            ...state.activeEvent,
            parts: [...state.activeEvent.parts, ...parsedChoice.parts],
            prompt: parsedChoice.prompt,
            choices: parsedChoice.choices
        }
    }

    console.log(res)
    return res
}


