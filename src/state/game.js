import {ACTIONS} from './'

const firstEvent = {
    id: "",
    parts: [],
    title: "",
    age: 0
}

const lastEvent = {
    id: "",
    parts: ["This is how far we built this thing"],
    title: "Game Over",
    age: 100

}

const initialState = {
    activeEvent: firstEvent,
    log: [],
    levelUpChoices: {},
    season: 0
}


export default (state = initialState, action) => {

    switch (action.type) {

        case ACTIONS.GAME_RESET:
            return initialState

        case ACTIONS.GAME_OVER:
            return {
                ...state,
                activeEvent: lastEvent,
                log: [lastEvent, ...state.log]
            }

        case ACTIONS.SET_EVENT:
            console.log("Active event [" + action.event.age + "]: " + action.event.path + "\n", action.event)
            const updatedLog = [...state.log]

            if (state.activeEvent.id !== action.event.id) updatedLog.unshift(action.event)  //Push to front
            else updatedLog[0] = action.event                                               //Update existing log entry

            return {
                ...state,
                activeEvent: action.event,
                log: updatedLog
            }


        case ACTIONS.LEVEL_UP_CHOICE_ADD:
            return {
                ...state,
                levelUpChoices:{
                    ...state.levelUpChoices,
                    [action.key]: action.activity
                }
            }

        case ACTIONS.LEVEL_UP_CHOICE_REMOVE: {
            const updatedChoices = { ...state.levelUpChoices}
            delete updatedChoices[action.key]
            return {...state, levelUpChoices: updatedChoices}
        }

        case ACTIONS.LEVEL_UP_COMPLETE:
            return {...state, levelUpChoices: []}


        case ACTIONS.LOG_LINE: {
            const updatedLog = [...state.log]
            updatedLog.splice(1,0,{
                title: action.title,
                parts: [action.content]
            })
            console.log(updatedLog)
            return {
                ...state,
                log: updatedLog
            }
        }

        default:
            return state
    }
}
