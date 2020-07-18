import React  from "react"
import { connect } from 'react-redux'
import Layout from "../components/layout"


function LogPage({log, dispatch}) {

    return (
        <Layout active={"log"}>
            <ul>
                { log.map((e,index) => <li  key={index}> {e.title}</li>)}
            </ul>
        </Layout>
    )
}


export default connect(state => ({
        log: state.game.log
    }), null)(LogPage)

