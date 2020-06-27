import Layout from "../components/layout";
import React, { useState, useEffect } from "react";

export default function(props) {

    // ----------------------
    const [time, setTime] = useState(0)
    useEffect(() => {

        window.setInterval(function(){

            fetch(`http://worldtimeapi.org/api/timezone/America/Los_Angeles`)
                .then(response => response.json()) // parse JSON from request
                .then(resultData => {
                    setTime(resultData.datetime)

                })

        }, 1000);
    }, [])

    return <Layout>


        <h1>This time is: </h1>
        {time}
    </Layout>
}
