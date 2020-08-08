import React from "react"
import {connect} from "react-redux"
import {Spinner} from "react-bootstrap"
import rehypeReact from "rehype-react"

import Mod from "../components/story-tags/mod"
import Stat from "../components/story-tags/stat"
import Set from "../components/story-tags/set"
import Check from "../components/story-tags/check"


function DisplayEvent({activeEvent}) {

    //Show loading if no event
    if(!activeEvent) return <Spinner animation="border" variant="primary" />

    const generateHtml = new rehypeReact({
        createElement: React.createElement,
        components: {
            mod: Mod,
            stat: Stat,
            set: Set,
            check: Check,
        },
    }).Compiler

    return <>
        <h1>{activeEvent.title}</h1>
        <div className={"event-body"}>
            {activeEvent.parts.map((part,index) => <div key={index}>{index>0?<hr/>:""}{generateHtml(part) }</div>)}
        </div>
    </>
}

export default connect(state => ({activeEvent: state.activeEvent}), null)(DisplayEvent)

