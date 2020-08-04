import {transform} from "../../plugins/gatsby-markdown-storybook"


function readyEvent(state, filename){
    if(! (filename in state.events)) filename = "404"

    const selectedEvent = state.events[filename]
    const event = {
        ...selectedEvent,
        ...transform(selectedEvent.hast)
    }
    delete event.hast
    return event
}

export function firstEvent(state)  {
    return {
        ...state,
        activeEvent: readyEvent(state,"index")
    }
}


export function nextEvent(state)  {

    return {
        ...state,
        activeEvent: readyEvent(state, state.activeEvent.next)
    }

}
