import React  from "react"
import ReactJson from "react-json-view"
import {connect} from "react-redux"

import Layout from "../../components/layout"
import './admin.css'




function AdminPage({ game} ) {

    delete game.events //Don't show these as it would be too large

    return <Layout active={"admin"}>
        <ReactJson src={game} />

    </Layout>
}


export default connect(state => ({game: state}), null)(AdminPage)

