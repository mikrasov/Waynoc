import React  from "react"
import { connect } from 'react-redux'
import {Row, Col, Button} from "react-bootstrap"
import { useStaticQuery, graphql } from 'gatsby'


import Season from "../components/season"
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

    return (
        <Layout active={"game"}>

            <Season season={player?.age  * 4}/>
            <div className={'container'}>
                <h1>{currentEvent.title}</h1>
                {currentEvent.html}

            </div>

            <div className="footer">
                <div className="gamecontrols">
                    <Row>
                        <Col lg={3} sm={6}></Col>
                        <Col lg={3} sm={6}></Col>
                        <Col lg={3} sm={6}></Col>
                        <Col lg={3} sm={6}><Button type="button"  size="lg"  onClick={ ()=>{nextSeason(player, data.events.nodes, dispatch)} }>Next Season</Button></Col>
                    </Row>
                </div>
            </div>

        </Layout>
    )
}

export default connect(state => ({
        events: state.events,
        player: state.player,
    }), null)(IndexPage)

