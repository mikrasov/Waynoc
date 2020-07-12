import React  from "react"
import rehypeReact from "rehype-react"
import {nextGameSeason, setActiveEvent, gameOver, resolveActiveEvent} from "../state"


export function convertAST(htmlAst){

    const renderAst = new rehypeReact({
        createElement: React.createElement,
        components: {  },
    }).Compiler

    return renderAst(htmlAst)
}

export function nextSeason(player, events, dispatch) {
    dispatch(nextGameSeason())

    const currentEventID = events[player.age/0.25]?.id

    if(currentEventID) {
        fetch('/static/event-data/'+currentEventID+".json")
            .then(response => response.json())
            .then(data => {
                dispatch(setActiveEvent(data))
                data.effects.forEach((e)=>{dispatch(e)})
            })
    }

    else{
        dispatch( gameOver() )
    }
}


export function makeChoice(activeEvent, choice, dispatch) {
    activeEvent.choices[choice].effects.forEach((e)=>{dispatch(e)})
    dispatch(resolveActiveEvent(choice))


}
