import React, {useState}  from "react"
import ReactJson from "react-json-view";

import Layout from "../../components/layout"
import './admin.css'
import {connect} from "react-redux";



function AdminPage({ game} ) {


    return <Layout active={"admin"}>
        <ReactJson src={game} />

    </Layout>
}


export default connect(state => ({game: state}), null)(AdminPage)

