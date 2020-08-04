import React  from "react"
import { connect } from 'react-redux'

import Layout from "../components/layout"
import DisplayEvent from "../components/display_event";
import LevelUp from "../components/level-up/"
import GameControls from "../components/controls/control_bar"
import {graphql, useStaticQuery} from "gatsby"

import {transform} from "../../plugins/gatsby-markdown-storybook"


function IndexPage({ player} ) {

    const data  = useStaticQuery( graphql`{
          events: allMarkdownStorybook {
            nodes {
              hast
              
            }
          }
        }`).events.nodes[0].hast



    const transformed = transform(data)
    return (
        <Layout active={"game"}>
            <pre>{JSON.stringify(transformed, null, 2)}</pre>
        </Layout>
    )
}

export default connect(state => ({
        player: state.player,
    }), null)(IndexPage)

