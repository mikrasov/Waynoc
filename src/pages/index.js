import Layout from "../components/layout";
import PlayerStats from "../components/player_stats"
import React, { useState } from "react";
import {Row, Col, Button} from "react-bootstrap"

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

function timePasses(playerState){

    return {
        name: playerState.name,
        age: playerState.age + 1,
        intelligence: playerState.intelligence + Math.floor(Math.random() * 2) ,
        perception: playerState.perception + Math.floor(Math.random() * 2),
        strength: playerState.strength + Math.floor(Math.random() * 2),
        stamina: playerState.stamina + Math.floor(Math.random() * 2),
        presence: playerState.presence + Math.floor(Math.random() * 2),
        communication: playerState.communication + Math.floor(Math.random() * 2),
        dexterity: playerState.dexterity + Math.floor(Math.random() * 2),
        quickness: playerState.quickness + Math.floor(Math.random() * 2)
    }

}



export default function(props) {
    const [player, updatePlayer] = useState(initialPlayer)


    return <Layout>

        <Row>
            <Col lg={6} sm={12}>
                <PlayerStats player={player} />
                <Button type="button" onClick={()=>{updatePlayer(timePasses(player))} } >Next Season</Button>
                <Button type="button" variant="danger" onClick={()=>{updatePlayer(initialPlayer)}}>Restart</Button>
            </Col>
        </Row>


    </Layout>
}
