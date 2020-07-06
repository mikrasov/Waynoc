import {ACTIONS} from "./index";

const initialState = {
    recentEvents: [{flavor_text: "You are born.", effect_text: "Happy Birthday!"}],
    activeEvent: null
}

const resetState = {
    recentEvents: [{flavor_text: "You are born... Again!", effect_text: "Happy Birthday?"}],
    activeEvent: null
}

const blankState = {
    recentEvents: [],
    activeEvent: null
}

export default (state = initialState, action) => {

    switch (action.type) {

        case ACTIONS.GAME_RESET:
            return resetState

        case ACTIONS.GAME_NEXT_SEASON:
            return blankState

        default:
            if (action.flavor_text) {
                const prevRecentEvents = [...state.recentEvents]
                prevRecentEvents.push({flavor_text: action.flavor_text, effect_text:action.effect_text})
                return {...state, recentEvents: prevRecentEvents}
            }
            return state
    }
}
