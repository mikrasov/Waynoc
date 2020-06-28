import React from "react";


function getEvent(events){
    const eventList = []

    for (const [index, e] of events.entries()) {
        eventList.push(<li key={index}>{e}</li>)
    }

    return eventList
}

export default (props) => (
    <>
        <h2>Events:</h2>
        <ul>
            {getEvent(props.events)}
        </ul>
    </>

)
