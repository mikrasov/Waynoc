import Layout from "../components/layout";
import PlayerStats from "../components/player_stats"
import EventLog from "../components/event_log"
import React, { useState } from "react";
import {Row, Col, Button} from "react-bootstrap"
import performEvent from "../util/events"
import Player from "../util/player"

const initialPlayer = new Player()


export default function(props) {
    const [player, updatePlayer] = useState(initialPlayer)
    const [recentEvents, updateRecentEvents] = useState([])


    return <Layout>

        <Row>
            <Col lg={6} sm={12}>
                <PlayerStats player={player} />
                <Button type="button" onClick={()=>{performEvent(player,updatePlayer,updateRecentEvents)}}>Next Season</Button>
                <Button type="button" variant="danger" onClick={()=>{updatePlayer(new Player())}}>Restart</Button>
            </Col>

            <Col lg={6} sm={12}>
                <EventLog events={recentEvents}/>
            </Col>
        </Row>


    </Layout>
}
