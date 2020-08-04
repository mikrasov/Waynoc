import React  from "react"
import { Button} from "react-bootstrap"
import {connect} from "react-redux"

import {nextEvent, makeChoice} from "../../state/actions"
import "./control_bar.css"

function GameControls({dispatch, game}) {

    const activeEvent = game.activeEvent

    function showControls(){

        if(activeEvent?.choices?.length) return <>
            { activeEvent.choices.map((choice,index) =>
                <Button type="button" key={index} size="lg"  onClick={ ()=>{dispatch(makeChoice(index))} } >{choice.label}</Button>
            )}
        </>

        else if(activeEvent?.next) return <>

            <Button type="button"  className="finalChoice" size="lg"  onClick={ ()=>{dispatch(nextEvent())} }>Next</Button>

        </>

        else return <>
            <Button type="button" disabled className="finalChoice" size="lg" >Game Over</Button>
        </>

    }

    return <div className="gamecontrols">{showControls()}</div>

}
export default connect(state => ({game: state}), null)(GameControls)
