import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import LevelUp from "../components/level-up"
import GameControls from "../components/controls/control_bar"

function IndexPage({ game, player, dispatch} ) {


    if(player.actions > 0) {

        return <Layout active={"game"}>
            <LevelUp/>
        </Layout>
    }

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
        player: state.player,
        game: state.game,
    }), null)(IndexPage)

