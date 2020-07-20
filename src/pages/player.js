import React  from "react"
import { connect } from 'react-redux'
import {Row, Col} from "react-bootstrap"
import Layout from "../components/layout"
import AgeYMD from "../components/player/age_ymd"
import PlayerStats from "../components/player/stats"
import PlayerSkills from "../components/player/skills"
import PlayerTags from "../components/player/tags"
import PlayerJobs from "../components/player/jobs"
import PlayerItems from "../components/player/items"
import PlayerRelationships from "../components/player/relationships"


function PlayerPage({player, dispatch}) {

    return (
        <Layout active={"player"}>
            <Row>
                <Col lg={2} sm={3}> <strong>Name:</strong> </Col>
                <Col lg={4} sm={9}> {player.name?player.name:"Unknown"}</Col>
                <Col lg={2} sm={3}> <strong>Age:</strong></Col>
                <Col lg={4} sm={9}> <AgeYMD age={player.age} /></Col>
                <Col lg={2} sm={3}> <strong>Morale:</strong></Col>
                <Col lg={4} sm={9}> {player.morale}</Col>
                <Col lg={2} sm={3}> <strong>Money:</strong></Col>
                <Col lg={4} sm={9}> ${player.money}</Col>
            </Row>
            <br/>
            <Row>
                <Col lg={6} sm={12}>
                    <h3>Abilities:</h3>
                    <PlayerStats player={player.stats}/>

                    <h3>Characteristics:</h3>
                    <PlayerTags tags={player.tags}/>

                    <h3>Possessions:</h3>
                    <PlayerItems jobs={player.items}/>
                </Col>
                <Col lg={6} sm={12}>
                    <h3>Skills:</h3>
                    <PlayerSkills skills={player.skills}/>

                    <h3>Relationships:</h3>
                    <PlayerRelationships relationships={player.relationships}/>

                    <h3>Jobs/Hobbies:</h3>
                    <PlayerJobs jobs={player.jobs}/>
                </Col>
            </Row>


        </Layout>
    )
}


export default connect(state => ({
        player: state.player,
    }), null)(PlayerPage)

