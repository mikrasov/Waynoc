import React  from "react"
import { connect } from 'react-redux'
import {Row, Col, Button, Table} from "react-bootstrap"
import PageLayout from "../components/page_layout"
import {GiAwareness, GiBeamsAura, GiBowman, GiBrain, GiEyeTarget, GiLungs, GiMuscleUp, GiRun} from "react-icons/gi"


function PlayerPage({player, events, dispatch}) {

    return (
        <PageLayout active={"player"}>
            <Row>
                <Col lg={2} sm={3}>
                    <strong>Name:</strong>
                </Col>
                <Col lg={4} sm={9}>
                    {player.name?player.name:"Unknown"}
                </Col>
                <Col lg={2} sm={3}>
                    <strong>Age:</strong>
                </Col>
                <Col lg={4} sm={9}>
                    {Math.floor(player.age)} years {(player.age % 1) * 12} months
                </Col>
            </Row>
            <br/>
            <Row>
                <Col lg={6} sm={12}>

                    <Table striped bordered hover>

                        <tbody>
                        <tr>
                            <td><GiBrain/> Int: {player.intelligence}</td>
                        </tr>
                        <tr>
                            <td><GiEyeTarget /> Per: {player.perception}</td>
                        </tr>
                        <tr>
                            <td><GiMuscleUp /> Str: {player.strength}</td>
                        </tr>
                        <tr>
                            <td><GiLungs/> Sta: {player.stamina}</td>
                        </tr>
                        <tr>
                            <td><GiBeamsAura/> Prs: {player.presence}</td>
                        </tr>
                        <tr>
                            <td><GiAwareness /> Com: {player.communication}</td>
                        </tr>
                        <tr>
                            <td><GiBowman/> Dex: {player.dexterity}</td>
                        </tr>
                        <tr>
                            <td><GiRun/> Qik: {player.quickness}</td>
                        </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col lg={6} sm={12}>
                    <h3>Skills:</h3>
                    <ul>
                        <li>None</li>
                    </ul>

                    <h3>Relationships:</h3>
                    <ul>
                        <li>None</li>
                    </ul>
                </Col>
            </Row>


        </PageLayout>
    )
}


export default connect(state => ({
        player: state.player,
        events: state.events
    }), null)(PlayerPage)

