import {transform} from "../../plugins/gatsby-markdown-storybook"
import {readyStats} from "./stats_manager"
import _ from "lodash"

function processEffect(stats, statsMeta, {type, stat, value}){
    const currentVal = _.get(stats, stat)
    const statMeta = _.get(statsMeta, stat)

    value = parseInt(value)

    if (type === "mod")  value =  currentVal + value

    value = Math.max(statMeta.min, value)
    value = Math.min(statMeta.max, value)

    _.set(stats, stat, value)
}

function processAllEffect(state, event){
    if(!event.effects) return state.stats

    //Process Effects
    const modifiedStats = _.cloneDeep(state.stats)
    event.effects.forEach(e=> processEffect(modifiedStats,state.stats_meta,e))
    delete event.effects

    return modifiedStats
}

function readyEvent(state, filename){
    if(! (filename in state.events)) filename = "404"

    const selectedEvent = state.events[filename]
    const event = {
        ...selectedEvent,
        ...transform(selectedEvent.hast, state)
    }
    delete event.hast

    const modifiedStats = processAllEffect(state, event)

    const log = [...state.log]

    if(state.activeEvent)
        log.unshift(state.activeEvent)

    return {
        ...state,
        stats: modifiedStats,
        activeEvent: event,
        log
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


export function resolveUI(state)  {

    return {
        ...state,
        activeEvent: {
            ...state.activeEvent,
            ui: null
        }
    }
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
    const modifiedStats = processAllEffect(state, currentEvent)

    return {
        ...state,
        stats: modifiedStats,
        activeEvent: {
            ...state.activeEvent,
            ...parsedChoice,
            parts: [...state.activeEvent.parts, ...parsedChoice.parts]
        }
    }
}


