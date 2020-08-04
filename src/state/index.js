import _ from "lodash"
import {ACTIONS} from "./actions"
import {firstEvent, nextEvent} from "./story_manager"

const initialState = {
    dataLoaded: false,
    activeEvent: null,
    player:{
        name: "",
        age: 0,
        actions: 0,
        gender: "",
        money: 0,
        morale: 50,
        stats: {
            intelligence: 0,
            perception: 0,
            strength: 0,
            constitution: 0,
            charisma: 0,
            dexterity: 0,
        },
        relationships: {
            mom: {
                closeness: 80
            },
            dad: {
                closeness: 80
            }
        },
        skills: {},
        items: {},
        tags: {},
        jobs: {},
        flags: {},
    }
}



export default (state = initialState, action) => {

    switch (action.type) {

        case ACTIONS.GAME_RESET:
            return initialState

        case ACTIONS.LOAD_DATA:
            return firstEvent({
                ...state,
                dataLoaded: true,
                meta: action.meta,
                events: _.keyBy(action.events, 'filename')
            })



        case ACTIONS.EVENT_NEXT:
            return  nextEvent(state)


        default:
            return state
    }
}




