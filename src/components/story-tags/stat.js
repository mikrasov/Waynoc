import React from "react"
import {OverlayTrigger, Popover} from "react-bootstrap"
import "./story-tags.css"
import {connect} from "react-redux"

function Stat({stats_meta, stat, children, silent}){
     if(silent || silent==="") return <></>//Don't print nodes with silent flag

    const meta = stats_meta[stat]

    const renderTooltip = (props) =>
        <Popover id="popover-basic"  {...props}>
            <Popover.Title as="h3">{meta.title}</Popover.Title>
            <Popover.Content>{meta.description}</Popover.Content>
        </Popover>

    return <OverlayTrigger overlay={renderTooltip} placement="auto" trigger={['hover', 'focus']}>
        {
            children?   <span>{children}</span>
            :           <span className={"characteristic-info"}>{meta.title}</span>
        }
    </OverlayTrigger>

 }

export default connect(state => ({stats_meta: state.stats_meta}), null)(Stat)


