import React  from "react"
import ReactJson from "react-json-view"
import {connect} from "react-redux"

import Layout from "../../components/layout"
import './admin.css'




function AdminPage({ game} ) {


    return <Layout active={"admin"}>
        <ReactJson src={game} />

    </Layout>
}


export default connect(state => ({game: state}), null)(AdminPage)

