import React from "react"
import {OverlayTrigger, Popover} from "react-bootstrap"
import "../story-tags/story-tags.css"
import {connect} from "react-redux";

 function StatInfo({stats_meta, stat}){

    const meta = stats_meta[stat]

    function renderTooltip(props) {

        return (
            <Popover id="popover-basic"  {...props}>
                <Popover.Title as="h3">{meta.title}</Popover.Title>
                <Popover.Content>{meta.description}</Popover.Content>
            </Popover>
        )
    }

    return <>
        <OverlayTrigger overlay={renderTooltip} placement="auto" trigger={['hover', 'focus']}>
            <span className={"characteristic-info"}>{meta.title}</span>
        </OverlayTrigger>
    </>
}

export default connect(state => ({stats_meta: state.stats_meta}), null)(StatInfo)


