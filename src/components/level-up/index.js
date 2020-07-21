import React from "react"

import Activity from "./activity"
import {modifyPlayer} from "../../state";
import {Col, Row} from "react-bootstrap";
import {connect} from "react-redux";

const childhood = {
    self: {
        title: "Practice on Your Own",
        activities: [
            {label: `Practice Athletics`,       effect: modifyPlayer({skill:"athletics"})},
            {label: `Practice Concentration`,   effect: modifyPlayer({skill:"concentration"})},
        ]
    },
    mom: {
        title: "Training From Mom",
        require: {
            path: "relationship.mom",
            value: 60
        },
        activities: [
            {label: `Learn Literature`,         effect: modifyPlayer({skill:"literature"})},
            {label: `Learn Charm`,              effect: modifyPlayer({skill:"charm"})},
            {label: `Learn Worldliness`,        effect: modifyPlayer({skill:"worldliness"})},
            {label: `Learn Etiquette`,          effect: modifyPlayer({skill:"etiquette"})},
        ]
    },
    dad: {
        title: "Training From Dad",
        require: {
            path: "relationship.dad",
            value: 60
        },
        activities: [
            {label: `Learn Mechanics`,          effect: modifyPlayer({skill:"mechanics"})},
            {label: `Learn Awareness`,          effect: modifyPlayer({skill:"awareness"})},
            {label: `Learn Bargain`,            effect: modifyPlayer({skill:"bargain"})},
            {label: `Learn Survival`,           effect: modifyPlayer({skill:"survival"})},
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

