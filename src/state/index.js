import {firstEvent, nextEvent, resolveUI, makeChoice} from "./story_manager"

const ACTION_TAG = {
    LOAD_DATA: "game/load",
    EVENT_NEXT: "event/next",
    EVENT_RESOLVE_UI: "event/resolve-ui",
    EVENT_CHOICE: "event/choice",
    GAME_RESET: "game/reset",
}

export const ACTIONS = {
    resetGame: () => ({type: ACTION_TAG.GAME_RESET}),
    nextEvent: () => ({type: ACTION_TAG.EVENT_NEXT}),
    resolveUI: () => ({type: ACTION_TAG.EVENT_RESOLVE_UI}),
    makeChoice: (choiceNum,diceRoll) => ( {type: ACTION_TAG.EVENT_CHOICE, choiceNum, diceRoll}),
    loadData: (events, statsMeta) => ({type: ACTION_TAG.LOAD_DATA, events, statsMeta})
}

const initialState = {
    dataLoaded: false,
    activeEvent: null,
    stats: {},
    log:[]
}

export default (state = initialState, action) => {

    switch (action.type) {

        case ACTION_TAG.GAME_RESET:
            return initialState

        case ACTION_TAG.LOAD_DATA:
            return firstEvent(state, action.events, action.statsMeta)

        case ACTION_TAG.EVENT_CHOICE:
            return makeChoice(state, action.choiceNum, action.diceRoll)

        case ACTION_TAG.EVENT_RESOLVE_UI:
            return resolveUI(state)

        case ACTION_TAG.EVENT_NEXT:
            return  nextEvent(state)

        default:
            return state
    }
}