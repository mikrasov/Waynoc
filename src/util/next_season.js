import React  from "react"
import rehypeReact from "rehype-react"
import {nextGameSeason, setActiveEvent, gameOver} from "../state"


function convertAST(htmlAst){


    const renderAst = new rehypeReact({
        createElement: React.createElement,
        components: {  },
    }).Compiler

    return renderAst(htmlAst)
}

export default function(player, events, dispatch) {
    dispatch(nextGameSeason())

    const currentEventID = events[player.age/0.25]?.id

    if(currentEventID) {
        fetch('/static/event-data/'+currentEventID+".json")
            .then(response => response.json())
            .then(data => {
                data.html = convertAST(data.htmlAst)
                dispatch(setActiveEvent(data))
                data.effects.forEach((e)=>{dispatch(e)})
            })
    }

    else{
        dispatch( gameOver() )
    }


}
