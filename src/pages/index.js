import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import DisplayEvent from "../components/display_event"
import ControlBar from "../components/control_bar"

function IndexPage({ game} ) {

    return (
        <Layout active={"game"}>

            <div className={"event-body"}>
                <h1>{game.activeEvent.title}</h1>
                <DisplayEvent event={game.activeEvent}/>
            </div>
            <ControlBar/>
        </Layout>
    )
}

export default connect(state => ({game: state}), null)(IndexPage)

