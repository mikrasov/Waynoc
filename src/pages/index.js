import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"


function IndexPage({ game} ) {

    return (
        <Layout active={"game"}>


        </Layout>
    )
}

export default connect(state => ({game: state}), null)(IndexPage)

