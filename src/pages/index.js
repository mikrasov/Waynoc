import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import DisplayEvent from "../components/display_event"

function IndexPage({ game} ) {

    return (
        <Layout active={"game"}>
            <DisplayEvent/>

        </Layout>
    )
}

export default connect(state => ({game: state}), null)(IndexPage)

