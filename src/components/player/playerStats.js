import React from "react"
import { Table} from "react-bootstrap"
import StatInfo from "./statInfo";
import {connect} from "react-redux";

const _ = require("lodash")

function PlayerStats( {stat, stats, stats_meta}){
    const statValue = _.get(stats, stat)
    const statMeta = _.get(stats_meta, stat)


    //If the top level stat with no sub stats
    if(statMeta.leaf) return <>
        <StatInfo stat={stat}/>
        : {statMeta.format_value.replace("{VALUE}",statValue).replace("{NAME}",statMeta.title)}
    </>

    //If the stat has sub stats
    return <>
        <StatInfo stat={stat} />

        <Table striped bordered hover>
        <tbody>

        {statMeta.sub.map(childId => {
            const childValue = _.get(stats, childId)
            const childMeta = _.get(stats_meta, childId)

            return <tr key={childId}>
                <td>
                    <StatInfo stat={childId}/>
                    : {childMeta.format_value.replace("{VALUE}",childValue).replace("{NAME}",childMeta.title)}
                </td>
            </tr>

        })}
        </tbody>
    </Table>
        </>
}

export default connect(state => ({stats: state.stats, stats_meta: state.stats_meta}), null)(PlayerStats)

