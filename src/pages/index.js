import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import DisplayEvent from "../components/display_event";
import LevelUp from "../components/level-up/"
import GameControls from "../components/controls/control_bar"

function IndexPage({ player} ) {

    const timeToLevelUp = player.actions > 0

    return (
        <Layout active={"game"}>
            {timeToLevelUp?<LevelUp/>:<DisplayEvent/>}
            <GameControls/>
        </Layout>
    )
}

export default connect(state => ({
        player: state.player,
    }), null)(IndexPage)

