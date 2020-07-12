const ACTIONS = require('./actions')

const firstEvent = {
    id: "",
    html: "Your are born. It is only downhill from here.",
    title: "Welcome to Waynoc",
    age: 0
}

const lastEvent = {
    id: "",
    html: "This is how far we built this thing",
    title: "Game Over",
    age: 100

}


const initialState = {
    recentEvents: [{flavor_text: firstEvent.title, effect_text:""}],
    activeEvent: firstEvent
}


export default (state = initialState, action) => {

    const prevRecentEvents = [...state.recentEvents]

    switch (action.type) {

        case ACTIONS.GAME_RESET:
            return initialState

        case ACTIONS.GAME_OVER:
            prevRecentEvents.push({flavor_text: "", effect_text:"Game Over"})
            return {
                recentEvents: prevRecentEvents,
                activeEvent: lastEvent
            }


        case ACTIONS.GAME_SET_EVENT:
            console.log("Active event ["+action.event.age+"]: "+action.event.id+"\n")

            prevRecentEvents.push({flavor_text: action.event.title, effect_text:""})
            return {...state, activeEvent: action.event, recentEvents: prevRecentEvents}


        default:
            return state
    }
}
