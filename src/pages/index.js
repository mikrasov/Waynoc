import React, {useState} from "react"
import { connect } from 'react-redux'
import {Row, Col, Button} from "react-bootstrap"


import Season from "../components/season";
import Layout from "../components/layout";
import PlayerStats from "../components/player_stats"
import EventLog from "../components/event_log"
import Choice from "../components/choice"
import nextSeason from "../events/next_season"

import { resetPlayer} from '../state/player'
import season from "../components/season";


function IndexPage({data, player, dispatch}) {
    const [activeEvent, updateActiveEvent] = useState(null)
    const [recentEvents, updateRecentEvents] = useState([{flavor_text: "You are born.", effect_text: "Happy Birthday!"}])


    return (
        <Layout>


            <Season season={player.age  * 4}/>
            <Choice event={activeEvent} onClose={()=>{updateActiveEvent(null)} } />

            <Row>
                <Col lg={6} sm={12}>
                    <PlayerStats player={player} />
                    <Button type="button" onClick={()=>{nextSeason(player, dispatch, updateRecentEvents, updateActiveEvent)}}>Next Season</Button>
                    <Button type="button" variant="danger" onClick={()=>{
                        dispatch(resetPlayer())
                        updateRecentEvents([{flavor_text: "You are born... Again!", effect_text: "Happy Birthday?"}])
                    }}>Restart</Button>
                </Col>

                <Col lg={6} sm={12}>
                    <EventLog events={recentEvents}/>
                </Col>
            </Row>

        </Layout>
    )
}


export default connect(state => ({
        player: state.player
    }), null)(IndexPage)

