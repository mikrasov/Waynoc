import {nextGameSeason, setActiveEvent, gameOver} from "../state"
import {compile, resolveChoice} from "../compiler"


export function nextSeason(player, events, dispatch) {

    const currentEventID = events[player.age/0.25]?.id

    if(currentEventID) {
        fetch('/static/event-data/'+currentEventID+".json")
            .then(response => {                console.log(response); return response.json()})
            .then(data => {
                console.log('/static/event-data/'+currentEventID+".json")

                console.log(data)
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
    const event = resolveChoice(activeEvent, choice)
    dispatch(setActiveEvent(event))
    event.effects.forEach((e)=>{dispatch(e)})
}
