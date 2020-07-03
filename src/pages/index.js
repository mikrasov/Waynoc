import Layout from "../components/layout";
import PlayerStats from "../components/player_stats"
import EventLog from "../components/event_log"
import React, {useState} from "react";
import {Row, Col, Button} from "react-bootstrap"
import nextSeason from "../events/next_season"
import Player from "../player"


export default function(props) {
    const [player, updatePlayer] = useState(new Player())
    const [recentEvents, updateRecentEvents] = useState([])


    return (
        <Layout>

            <Row>
                <Col lg={6} sm={12}>
                    <PlayerStats player={player} />
                    <Button type="button" onClick={()=>{nextSeason(player, updatePlayer, updateRecentEvents)}}>Next Season</Button>
                    <Button type="button" variant="danger" onClick={()=>{updatePlayer(new Player())}}>Restart</Button>
                </Col>

                <Col lg={6} sm={12}>
                    <EventLog events={recentEvents}/>
                </Col>
            </Row>


        </Layout>
    )
}
