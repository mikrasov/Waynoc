import React  from "react"
import { connect } from 'react-redux'
import Layout from "../components/layout"

import PlayerStats from "../components/player/playerStats"

const _ = require("lodash")

function PlayerPage({stats, stats_meta, dispatch}) {

    let singleLevelStat = stats_meta?_.filter(Object.values(stats_meta), m=>(!m.secret && !m.parent && m.leaf)):[]
    let multiLevelStat = stats_meta?_.filter(Object.values(stats_meta), m=>(!m.secret && !m.parent && !m.leaf)):[]


    return (
        <Layout active={"player"}>

            {singleLevelStat.map( m => <PlayerStats key={m.key} stat={m.key} /> )}
            <hr/>
            {multiLevelStat.map( m => <PlayerStats key={m.key} stat={m.key} /> )}
        </Layout>
    )
}


export default connect(state => ({stats_meta: state.stats_meta}), null)(PlayerPage)

