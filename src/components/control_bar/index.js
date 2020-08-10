import React  from "react"
import { Button} from "react-bootstrap"
import {connect} from "react-redux"

import {ACTIONS} from "../../state"
import "./control_bar.css"

function rollDice() {
    return (1 + Math.floor(Math.random() * 6)) + (1 + Math.floor(Math.random() * 6))
}

function GameControls({dispatch, game}) {

    const activeEvent = game.activeEvent

    function showControls(){

        if(activeEvent?.choices?.length) return <>
            <h3>{activeEvent.prompt}</h3>
            { activeEvent.choices.map((choice,index) =>
                <Button type="button" key={index} size="lg"  onClick={ ()=>{dispatch(ACTIONS.makeChoice(index, rollDice()))} } >{choice.label}</Button>
            )}
        </>

        else if(activeEvent?.next) return <>

            <Button type="button"  className="finalChoice" size="lg"  onClick={ ()=>{dispatch(ACTIONS.nextEvent())} }>Next</Button>

        </>

        else return <>
            <Button type="button" disabled className="finalChoice" size="lg" >Game Over</Button>
        </>

    }

    return <div className="gamecontrols">{showControls()}</div>

}
export default connect(state => ({game: state}), null)(GameControls)
