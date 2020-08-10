import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import DisplayEvent from "../components/display_event"
import ControlBar from "../components/control_bar"

function IndexPage({ game} ) {

    return (
        <Layout active={"game"}>
            <DisplayEvent/>
            <ControlBar/>
        </Layout>
    )
}

export default connect(state => ({game: state}), null)(IndexPage)

