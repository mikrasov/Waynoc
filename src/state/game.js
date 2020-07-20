import {ACTIONS} from './'

const firstEvent = {
    id: "",
    parts: ["You are Born!"],
    title: "Welcome to Waynoc",
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
    log: [firstEvent],
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
                log: [...state.log, lastEvent]
            }


        case ACTIONS.SET_EVENT:

            console.log("Active event ["+action.event.age+"]: "+action.event.path+"\n", action.event)

            const updatedLog = [...state.log]

            if (state.activeEvent.id !== action.event.id){
                updatedLog.push(action.event)
            }


            return {
                ...state,
                activeEvent: action.event,
                log: updatedLog}


        default:
            return state
    }
}
