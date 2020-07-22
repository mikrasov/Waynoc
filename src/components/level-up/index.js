import React from "react"
import {Container, Row, Col} from "react-bootstrap"


import Source from "./source"

const childhood = {
    self: {
        title: "Practice on Your Own",
        max: 100,
        activities: [
            {label: `Read a Book`, effects: [{skill:"literature", value:5}]},
            {label: `Play Outside`, effects: [{skill:"athletics", value:5}]},
            {label: `Build a Model`, effects: [{skill:"concentration", value:5}]},
        ]
    },
    mom: {
        title: "Training From Mom",
        max: 1,
        require: {
            path: "relationship.mom",
            value: 60
        },
        activities: [
            {label: `Do errands around Town`, effects: [{skill:"charm"}] },
            {label: `Listen to Stories`, effects: [{skill:"worldliness"}] },
            {label: `Go to a Restaurant`, effects: [{skill:"etiquette"}] },
        ]
    },
    dad: {
        title: "Training From Dad",
        max: 1,
        require: {
            path: "relationship.dad",
            value: 60
        },
        activities: [
            {label: `Work on The Car`, effects: [{skill:"mechanics"}] },
            {label: `Go Shopping`, effects: [{skill:"bargain"}] },
            {label: `Go Camping`, effects: [{skill:"survival"}] },
        ]
    }
}

export default function LevelUp(props) {

    return <>
        <h1> Time to Level Up! </h1>

        <Container fluid >
            <Row>
                {Object.entries(childhood).map(([key, training]) =>
                    <Col lg={6} sm={12} key={key}>
                        <Source source={key} training={training}/>
                    </Col>
                )}
            </Row>
        </Container>
    </>
}
