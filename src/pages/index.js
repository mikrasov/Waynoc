import React  from "react"
import { connect } from 'react-redux'
import {Row, Col, Button} from "react-bootstrap"
import { useStaticQuery, graphql } from 'gatsby'

import Layout from "../components/layout"
import nextSeason from "../util/next_season"

function IndexPage({player, events, dispatch} ) {

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

    const currentEvent = events.activeEvent

    let nextSeasonControl = <>
        <Col lg={9} sm={6}/>
        <Col lg={3} sm={6}><Button type="button"  size="lg"  onClick={ ()=>{nextSeason(player, data.events.nodes, dispatch)} }>Next Season</Button></Col>
    </>

    if(currentEvent?.choices?.length){
        nextSeasonControl = currentEvent.choices.map((choice,index) => <>
            <Col lg={3} sm={6} key={index}><Button type="button"  size="lg"  onClick={ ()=>{nextSeason(player, data.events.nodes, dispatch)} } >{choice.title}</Button></Col>
        </>)
    }

    return (
        <Layout active={"game"}>

            <h1>{currentEvent.title}</h1>
            {currentEvent.html}
            <div className="gamecontrols">
                <Row>{nextSeasonControl}</Row>
            </div>

        </Layout>
    )
}

export default connect(state => ({
        events: state.events,
        player: state.player,
    }), null)(IndexPage)

