import React  from "react"
import { connect } from 'react-redux'
import {Row, Col} from "react-bootstrap"
import Layout from "../components/layout"
import AgeYMD from "../components/age_ymd"
import PlayerStats from "../components/player/stats"
import PlayerSkills from "../components/player/skills"
import PlayerTags from "../components/player/tags"
import PlayerJobs from "../components/player/jobs"
import PlayerItems from "../components/player/items"
import PlayerRelationships from "../components/player/relationships"
const lodash = require("lodash")

function PlayerPage({player, dispatch}) {

    return (
        <Layout active={"player"}>
            <Row>
                <Col xs={12}><h3>{player.name?player.name:"Unknown Name"}</h3><br/></Col>

                <Col lg={2} xs={3}> <strong>Age:</strong></Col>
                <Col lg={4} xs={9}> <AgeYMD age={player.age} /></Col>
                <Col lg={2} xs={3}> <strong>Gender:</strong></Col>
                <Col lg={4} xs={9}> {lodash.upperFirst(player.gender)} </Col>


                <Col lg={2} xs={3}> <strong>Money:</strong></Col>
                <Col lg={4} xs={9}> ${player.money}</Col>
                <Col lg={2} xs={3}> <strong>Morale:</strong></Col>
                <Col lg={4} xs={9}> {player.morale}</Col>
            </Row>
            <br/><br/>
            <Row>
                <Col lg={4} sm={6} xs={12}>
                    <h3>Abilities:</h3>
                    <PlayerStats player={player.stats}/>
                </Col>
                <Col lg={4} sm={6} xs={12}>
                    <h3>Skills:</h3>
                    <PlayerSkills skills={player.skills}/>
                </Col>
                <Col lg={4} sm={6} xs={12}>
                    <h3>Relationships:</h3>
                    <PlayerRelationships relationships={player.relationships}/>
                </Col>
                <Col lg={4} sm={6} xs={12}>
                    <h3>Tags:</h3>
                    <PlayerTags tags={player.tags}/>
                </Col>
                <Col lg={4} sm={6} xs={12}>
                    <h3>Possessions:</h3>
                    <PlayerItems jobs={player.items}/>
                </Col>

                <Col lg={4} sm={6} xs={12}>
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

