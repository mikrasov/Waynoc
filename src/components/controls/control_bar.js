import React  from "react"
import { Button, Col, Row} from "react-bootstrap"
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

    let nextSeasonControl = <>
        <Col lg={9} sm={6}/>
        <Col lg={3} sm={6}><Button type="button"  size="lg"  onClick={ ()=>{nextSeason(player, data.events.nodes, dispatch)} }>Next Season</Button></Col>
    </>


    if(activeEvent?.input === "name"){
        nextSeasonControl = <ChangeName/>
    }
    else if(activeEvent?.choices?.length){
        nextSeasonControl = activeEvent.choices.map((choice,index) => <Col lg={3} sm={6} key={index}>
                <Button type="button"  size="lg"  onClick={ ()=>{makeChoice(player, activeEvent,index,dispatch)} } >{choice.label}</Button>
            </Col>
        )
    }

    return <div className="gamecontrols">
        {activeEvent.prompt && <h3>{activeEvent.prompt}</h3>}

        <Row>{nextSeasonControl}</Row>
    </div>
}
export default connect(state => ({ events: state.events, player: state.player,}), null)(GameControls)
