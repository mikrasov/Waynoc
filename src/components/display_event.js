import React from "react"
import {connect} from "react-redux"

function DisplayEvent({game}) {

    return <>
        <h1>{game.activeEvent.title}</h1>
        <div className={"event-body"}>
            { game.activeEvent.parts.map((event,index) => <div key={index}>{index>0?<hr/>:""}{event}</div>)}
        </div>
    </>
}

export default connect(state => ({
    game: state.game,
}), null)(DisplayEvent)

