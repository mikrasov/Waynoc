import React from "react"
import "./story-tags.css"
import {connect} from "react-redux"
import Stat from "./stat"

function Mod({stat, value, stats_meta, silent}){
    if(silent || silent==="") return <></>//Don't print nodes with silent flag

    const meta = stats_meta[stat]
    const modSign = value>0?"+":""
    const modClass = value>0?"positive":"negative"

    return <Stat stat={stat}>
        <span className={"characteristic-info "+modClass}>{meta.format.replace("{VALUE}",modSign+value).replace("{NAME}",meta.title)}</span>
    </Stat>
}

export default connect(state => ({stats_meta: state.stats_meta}), null)(Mod)


