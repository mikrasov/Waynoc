import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import GameControls from "../components/controls/control_bar"

function IndexPage({ game, dispatch} ) {

    return (
        <Layout active={"game"}>

            <h1>{game.activeEvent.title}</h1>
            <div className={"event-body"}>
                { game.activeEvent.parts.map((event,index) => <div key={index}>{index>0?<hr/>:""}{event}</div>)}
            </div>

            <GameControls/>
        </Layout>
    )
}

export default connect(state => ({
        game: state.game,
    }), null)(IndexPage)

