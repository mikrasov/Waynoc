import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import DisplayEvent from "../components/display_event"
import ControlBar from "../components/control_bar"
import CharacterCreator from "../components/createCharacter"

function IndexPage( { event} ) {

    function display(){

        switch (event?.ui) {

            case "create":
                return <CharacterCreator/>

            default:
                return <>
                    <div className={"event-body"}>
                        <h1>{event.title}</h1>
                        <DisplayEvent event={event}/>
                    </div>
                    <ControlBar/>
                </>
        }
    }

    return <Layout active={"game"}> {display()}</Layout>

}

export default connect(state => ({event: state.activeEvent}), null)(IndexPage)