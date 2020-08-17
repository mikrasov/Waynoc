import React from "react"

import {Spinner} from "react-bootstrap"
import rehypeReact from "rehype-react"

import Mod from "../components/story-tags/mod"
import Stat from "../components/story-tags/stat"
import Set from "../components/story-tags/set"
import Check from "../components/story-tags/check"
import Value from "../components/story-tags/value"



export default function DisplayEvent({event}) {

    //Show loading if no event
    if(!event) return <Spinner animation="border" variant="primary" />

    const generateHtml = new rehypeReact({
        createElement: React.createElement,
        components: {
            mod: Mod,
            stat: Stat,
            set: Set,
            check: Check,
            value: Value
        },
    }).Compiler

    return <>
        {event.parts.map((part, index) => <div key={index}>{index>0?<hr/>:""}{generateHtml(part) }</div>)}
    </>
}



