import React  from "react"
import { Button} from "react-bootstrap"
import {connect} from "react-redux"
import EventDirector from "../../util/event_director"
import ChangeName from "./change_name";
import "./control_bar.css"

function GameControls({dispatch, game, player}) {

    const director = new EventDirector(dispatch, game, player)
    const activeEvent = game.activeEvent

    function showControls(){

        if(player.actions > 0) {
            const availableActions = player.actions - Object.keys(game.levelUpChoices).length
            return <>
                <strong>Available Actions</strong>: {availableActions} of {player.actions}

                <Button type="button" disabled={availableActions>0} className="finalChoice" size="lg" onClick={() => {
                    director.levelUp(game.levelUpChoices)
                }}>Confirm</Button>
            </>
        }


        else if(activeEvent?.input === "name") return <>
            {activeEvent.prompt && <h3>{activeEvent.prompt}</h3>}
            <ChangeName/>
        </>

        else if(activeEvent?.choices?.length) return <>
            { activeEvent.choices.map((choice,index) =>
                <Button type="button" key={index} size="lg"  onClick={ ()=>{director.makeChoice(index)} } >{choice.label}</Button>
            )}
        </>

        else return <>
            <Button type="button"  className="finalChoice" size="lg"  onClick={ ()=>{director.nextSeason()} }>Next Season</Button>
        </>

    }

    return <div className="gamecontrols">{showControls()}</div>

}
export default connect(state => ({
    game: state.game, player: state.player,
}), null)(GameControls)
