import {nextGameSeason, setActiveEvent, gameOver} from "../state"
import {compile, resolveEvent} from "../compiler"


export function nextSeason(player, events, dispatch) {

    const currentEventID = events[player.age/0.25]?.id

    if(currentEventID) {
        fetch('/static/event-data/'+currentEventID+".json")
            .then(response => response.json())
            .then(data => {
                const event =  compile(data)
                dispatch(setActiveEvent(event))
                event.effects.forEach((e)=>{dispatch(e)})
                dispatch(nextGameSeason())
            })
    }

    else{
        dispatch( gameOver() )
    }
}


export function makeChoice(activeEvent, choice, dispatch) {
    const event = resolveEvent(activeEvent, choice)
    dispatch(setActiveEvent(event))
    event.effects.forEach((e)=>{dispatch(e)})
}
