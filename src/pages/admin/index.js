import React  from "react"
import {connect} from "react-redux"
import Layout from "../../components/layout"
import './admin.css'

function AdminPage({ game} ) {

    if (typeof window === 'undefined') return <></>

    const ReactJson = require("react-json-view")
    delete game.events //Don't show these as it would be too large

    return <Layout active={"admin"}>
        <ReactJson src={game} />
    </Layout>
}


export default connect(state => ({game: state}), null)(AdminPage)

