import React  from "react"
import { connect } from 'react-redux'
import {Accordion, Card} from "react-bootstrap"
import Layout from "../components/layout"


import "./log.css"

function LogPage({log, dispatch}) {

    return <Layout active={"log"}>
        <Accordion defaultActiveKey={0} className={"event-log"}>
            { log.map((event,index) => <Card>
                    <Accordion.Toggle as={Card.Header} eventKey={index}>
                        {event.title}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={index}>
                        <Card.Body className={"event-body"}>
                            {event.parts.map((part,i) => <div key={i}>{i>0?<hr/>:""}{part}</div> )}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            )}
        </Accordion>
    </Layout>

}


export default connect(state => ({
        log: state.log
    }), null)(LogPage)

