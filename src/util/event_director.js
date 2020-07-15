import {nextGameSeason, setActiveEvent, gameOver} from "../state"
import {compile, resolveChoice} from "../compiler"

function rollDice() {
    return (1 + Math.floor(Math.random()*6) ) +  (1 + Math.floor(Math.random()*6) )
}

export function nextSeason(player, events, dispatch) {

    const currentEventID = events[player.age/0.25]?.id

    if(currentEventID) {
        fetch('/static/event_data/'+currentEventID+".json")
            .then(response => {return response.json()})
            .then(data => {
                console.log(data)
                const event =  {
                    ...data,
                    ...compile(player, data.ast)
                }
                dispatch(setActiveEvent(event))
                event.effects.forEach((e)=>{dispatch(e)})
                dispatch(nextGameSeason())
            })
    }

    else{
        dispatch( gameOver() )
    }
}


export function makeChoice(player, activeEvent, choice, dispatch) {
    const diceRoll = rollDice()
    console.log("Rolled a "+diceRoll)
    const event = {
        ...activeEvent,
        ...resolveChoice(player, activeEvent, choice, diceRoll)
    }
    dispatch(setActiveEvent(event))
    event.effects.forEach((e)=>{dispatch(e)})
}
