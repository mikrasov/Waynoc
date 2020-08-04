import React from "react"
import {OverlayTrigger, Popover} from "react-bootstrap"
import "./story-tags.css"

export default function ({stat, value}){

    const binary = false

    function renderTooltip(props) {

        return (
            <Popover id="popover-basic"  {...props}>
                <Popover.Title as="h3">{stat}</Popover.Title>
                <Popover.Content  />
            </Popover>
        )
    }

    //Do we show a value with the characteristic
    let valueTag = ""
    if(value && !binary){
        if(value > 0) valueTag = `+${value}`
        else valueTag = `${value}`
    }

    let modClass = ""
    if(value>0) modClass ="positive"
    if(value<0) modClass ="negative"


    return <>
        <OverlayTrigger overlay={renderTooltip} placement="auto" trigger={['hover', 'focus']}>
            <span className={"characteristic-info "+modClass}>{valueTag} {stat}</span>
        </OverlayTrigger>
    </>
}
