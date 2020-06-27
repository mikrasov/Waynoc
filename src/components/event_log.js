import React from "react";


function getEventFlavor(events){
    const eventList = []

    for (const [index, e] of events.entries()) {
        eventList.push(<li key={index}>{e.flavor}</li>)
    }

    return eventList
}

export default (props) => (
    <>
        <h2>Events:</h2>
        <ul>
            {getEventFlavor(props.events)}
        </ul>
    </>

)
