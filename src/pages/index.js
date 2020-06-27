import Layout from "../components/layout";
import React, { useState, useEffect } from "react";

export default function(props) {

    // ----------------------
    const [time, setTime] = useState(0)
    useEffect(() => {
        // get data from GitHub api
        fetch(`http://worldtimeapi.org/api/timezone/America/Los_Angeles`)
            .then(response => response.json()) // parse JSON from request
            .then(resultData => {
                setTime(resultData.datetime)

            }) // set data for the number of stars
    }, [])

    return <Layout>


        <h1>This time is: </h1>
        {time}
    </Layout>
}
