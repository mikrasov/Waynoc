import React  from "react"
import { Button} from "react-bootstrap"
import {connect} from "react-redux"
import {makeChoice, nextSeason} from "../../util/event_director"
import ChangeName from "./change_name";

import {graphql, useStaticQuery} from "gatsby";

function GameControls({dispatch, events, player}) {

    const data  = useStaticQuery( graphql`{
        events: allMarkdownRemark(
            sort: {
              fields: [frontmatter___age]
              order: ASC
            }
        ){
            nodes {
                id
            }
        }
    }`)

    const activeEvent = events.activeEvent

    let nextSeasonControl = <Button type="button"  className={"nextseason"} size="lg"  onClick={ ()=>{nextSeason(player, data.events.nodes, dispatch)} }>Next Season</Button>


    if(activeEvent?.input === "name"){
        nextSeasonControl = <ChangeName/>
    }
    else if(activeEvent?.choices?.length){
        nextSeasonControl = activeEvent.choices.map((choice,index) =>
            <Button type="button"  key={index} size="lg"  onClick={ ()=>{makeChoice(player, activeEvent,index,dispatch)} } >{choice.label}</Button>
        )
    }

    return <div className="gamecontrols">
        {activeEvent.prompt && <h3>{activeEvent.prompt}</h3>}

        {nextSeasonControl}
    </div>
}
export default connect(state => ({ events: state.events, player: state.player,}), null)(GameControls)
