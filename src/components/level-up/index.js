import React from "react"

import Activity from "./activity"
import {modifyPlayer} from "../../state";
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";

const childhood = {
    self: {
        title: "Practice on Your Own",
        activities: [
            {label: `Practice Athletics`, effect: modifyPlayer("skills.athletics", 15)},
            {label: `Practice Concentration`, effect: modifyPlayer("skills.concentration", 15)},
        ]
    },
    mom: {
        title: "Training From Mom",
        require: {
            path: "relationship.mom",
            value: 60
        },
        activities: [
            {label: `Learn Literature`, effect: modifyPlayer("skills.literature", 15)},
            {label: `Learn Charm`, effect: modifyPlayer("skills.charm", 15)},
            {label: `Learn Worldliness`, effect: modifyPlayer("skills.worldliness", 15)},
            {label: `Learn Etiquette`, effect: modifyPlayer("skills.etiquette", 15)},
        ]
    },
    dad: {
        title: "Training From Dad",
        require: {
            path: "relationship.dad",
            value: 60
        },
        activities: [
            {label: `Learn Mechanics`, effect: modifyPlayer("skills.mechanics", 15)},
            {label: `Learn Awareness`, effect: modifyPlayer("skills.awareness", 15)},
            {label: `Learn Bargain`, effect: modifyPlayer("skills.bargain", 15)},
            {label: `Learn Survival`, effect: modifyPlayer("skills.survival", 15)},
        ]
    }
}

function LevelUp({player}) {

    return <>
        <h1> Time to Level Up! </h1>

        <strong>Available Actions</strong>: {player.actions}<br/><br/>

        <Row>
            {Object.entries(childhood).map(([key, training]) =>
                <Col lg={6} sm={12} key={key}><Activity source={key} training={training}/></Col>
            )}
        </Row>
    </>
}

export default connect(state => ({
    player: state.player,
}), null)(LevelUp)

