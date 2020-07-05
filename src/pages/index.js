import Layout from "../components/layout";
import PlayerStats from "../components/player_stats"
import EventLog from "../components/event_log"
import Choice from "../components/choice"
import React, {useState} from "react";
import {Row, Col, Button} from "react-bootstrap"
import nextSeason from "../events/next_season"
import Player from "../player"


export default function(props) {
    const [player, updatePlayer] = useState(new Player())
    const [recentEvents, updateRecentEvents] = useState([{flavor_text: "You are born.", effect_text: "Happy Birthday!"}])

    const [activeChoice, updateActiveChoice] = useState({
        flavor_text: "You learned your name",
        body:<p>You realized that your parents were calling you <strong>George</strong> all along.</p>,
        controls:[
            {label: "Accept Your Fate!", action: ()=>{ console.log("You agreed to be called George")} }
        ]
    })


    return (
        <Layout>
            <Choice event={activeChoice} onClose={()=>{updateActiveChoice(null)} } />

            <Row>
                <Col lg={6} sm={12}>
                    <PlayerStats player={player} />
                    <Button type="button" onClick={()=>{nextSeason(player, updateRecentEvents)}}>Next Season</Button>
                    <Button type="button" variant="danger" onClick={()=>{
                        updatePlayer(new Player())
                        updateRecentEvents([{flavor_text: "You are born. Again.", effect_text: "Happy Birthday?"}])
                    }}>Restart</Button>
                </Col>

                <Col lg={6} sm={12}>
                    <EventLog events={recentEvents}/>
                </Col>
            </Row>
        </Layout>
    )
}
