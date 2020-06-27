import Layout from "../components/layout";
import PlayerStats from "../components/player_stats"
import EventLog from "../components/event_log"
import React, { useState } from "react";
import {Row, Col, Button} from "react-bootstrap"
import performEvent from "../util/events"

const initialPlayer = {
    name: "George",
    age: 0,
    intelligence: 0,
    perception: 0,
    strength: 0,
    stamina: 0,
    presence: 0,
    communication: 0,
    dexterity: 0,
    quickness: 0
}





export default function(props) {
    const [player, updatePlayer] = useState(initialPlayer)
    const [recentEvents, updateRecentEvents] = useState([])


    return <Layout>

        <Row>
            <Col lg={6} sm={12}>
                <PlayerStats player={player} />
                <Button type="button" onClick={()=>{    performEvent(player,updatePlayer,updateRecentEvents)} } >Next Season</Button>
                <Button type="button" variant="danger" onClick={()=>{updatePlayer(initialPlayer)}}>Restart</Button>
            </Col>

            <Col lg={6} sm={12}>
                <EventLog events={recentEvents}/>
            </Col>
        </Row>


    </Layout>
}
