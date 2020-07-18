import React  from "react"
import { Button} from "react-bootstrap"
import {connect} from "react-redux"
import EventDirector from "../../util/event_director"
import ChangeName from "./change_name";

function GameControls({dispatch, game, player}) {

    const director = new EventDirector(dispatch, game, player)
    const activeEvent = game.activeEvent

    let nextSeasonControl = <Button type="button"  className={"nextseason"} size="lg"  onClick={ ()=>{director.nextSeason()} }>Next Season</Button>


    if(activeEvent?.input === "name"){
        nextSeasonControl = <ChangeName/>
    }
    else if(activeEvent?.choices?.length){
        nextSeasonControl = activeEvent.choices.map((choice,index) =>
            <Button type="button" key={index} size="lg"  onClick={ ()=>{director.makeChoice(index)} } >{choice.label}</Button>
        )
    }

    return <div className="gamecontrols">
        {activeEvent.prompt && <h3>{activeEvent.prompt}</h3>}
        {nextSeasonControl}
    </div>

}
export default connect(state => ({ game: state.game, player: state.player,}), null)(GameControls)
