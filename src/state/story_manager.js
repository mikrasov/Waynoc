import {transform} from "../../plugins/gatsby-markdown-storybook"



export function firstEvent(state)  {

    const selectedEvent = state.events[0]

    const event = {
        ...selectedEvent,
        ...transform(selectedEvent.hast)
    }

    delete event.hast

    return event
}
