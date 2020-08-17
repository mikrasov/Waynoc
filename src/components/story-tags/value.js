import React from "react"
import "./story-tags.css"
import {connect} from "react-redux"
import Stat from "./stat"

function Value({stat, stats, stats_meta}){

    const meta = stats_meta[stat]
    const value = stats[stat]

    return <Stat stat={stat}>
        <span className={"characteristic-info"}>{meta.format.replace("{VALUE}",value).replace("{NAME}",meta.title)}</span>
    </Stat>
}

export default connect(state => ({stats: state.stats, stats_meta: state.stats_meta}), null)(Value)
