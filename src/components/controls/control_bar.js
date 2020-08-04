import React  from "react"
import { Button} from "react-bootstrap"
import {connect} from "react-redux"

import "./control_bar.css"

function GameControls({dispatch, game}) {

    const activeEvent = game.activeEvent

    function showControls(){

        if(game.levelUp) {
            const availableActions = game.actions - Object.keys(game.levelUpChoices).length
            return <>
                <strong>Available Actions</strong>: {availableActions} of {game.actions}

                <Button type="button" disabled={availableActions>0} className="finalChoice" size="lg" onClick={() => {}}>Confirm</Button>
            </>
        }



        else if(activeEvent?.choices?.length) return <>
            { activeEvent.choices.map((choice,index) =>
                <Button type="button" key={index} size="lg"  onClick={ ()=>{} } >{choice.label}</Button>
            )}
        </>

        else return <>
            <Button type="button"  className="finalChoice" size="lg"  onClick={ ()=>{} }>Next Season</Button>
        </>

    }

    return <div className="gamecontrols">{showControls()}</div>

}
export default connect(state => ({
    game: state.game
}), null)(GameControls)
