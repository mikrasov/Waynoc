import React  from "react"
import { connect } from 'react-redux'
import {Row, Col, Button} from "react-bootstrap"
import { graphql } from 'gatsby'
import { MDXProvider, MDXRenderer } from 'gatsby-plugin-mdx'


import Season from "../components/season";
import Layout from "../components/layout";
import PlayerStats from "../components/player_stats"
import EventLog from "../components/event_log"
import Choice from "../components/choice"

import nextSeason from "../util/next_season"
import { resetGame} from '../state/'


function IndexPage({data, player, events, dispatch}) {

    return (
        <Layout>

            <Season season={player.age  * 4}/>
            <Choice event={events.activeEvent} onClose={()=>{} } />

            <Row>
                <Col lg={6} sm={12}>
                    <PlayerStats player={player} />
                    <Button type="button" onClick={()=>{nextSeason(player, dispatch)}}>Next Season</Button>
                    <Button type="button" variant="danger" onClick={()=>{
                        dispatch(resetGame())
                    }}>Restart</Button>
                </Col>

                <Col lg={6} sm={12}>
                    <EventLog events={events.recentEvents}/>
                    <MDXRenderer>{data.events.nodes[0].body}</MDXRenderer>
                </Col>
            </Row>

        </Layout>
    )
}

export const query = graphql`{
    events: allMdx {
        nodes {
          frontmatter {
            title
          }
          body
          rawBody
          excerpt
          headings {
            value
          }
        }
    }
}`

export default connect(state => ({
        player: state.player,
        events: state.events
    }), null)(IndexPage)

