import React  from "react"
import { connect } from 'react-redux'
import Layout from "../components/layout"


function LogPage({events, dispatch}) {

    return (
        <Layout active={"log"}>
            <ul>
                { events.recentEvents.map((event,index) => <li  key={index}> {event.flavor_text}</li>)}
            </ul>
        </Layout>
    )
}


export default connect(state => ({
        events: state.events
    }), null)(LogPage)

