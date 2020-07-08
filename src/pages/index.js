import React  from "react"
import { connect } from 'react-redux'
import {Row, Col, Button} from "react-bootstrap"
import { graphql } from 'gatsby'
import { MDXProvider, MDXRenderer } from 'gatsby-plugin-mdx'
import {Nav, Navbar} from 'react-bootstrap'

import Season from "../components/season"
import Layout from "../components/layout"

import nextSeason from "../util/next_season"


function IndexPage({data, player, events, dispatch}) {

    return (
        <Layout active={"game"}>

            <Season season={player?.age  * 4}/>
            <div className={'container'}>
                    <MDXRenderer>{data.events.nodes[0].body}</MDXRenderer>
            </div>

            <div className="footer">
                <div className="gamecontrols">
                    <Row>
                        <Col lg={3} sm={6}></Col>
                        <Col lg={3} sm={6}></Col>
                        <Col lg={3} sm={6}></Col>
                        <Col lg={3} sm={6}><Button type="button"  size="lg"  onClick={ ()=>{nextSeason(player, dispatch)} }>Next Season</Button></Col>
                    </Row>
                </div>
            </div>

        </Layout>
    )
}

export const query = graphql`{
    events: allMdx {
        nodes {
          frontmatter {
            title
          }
          body 
        }
    }
}`

export default connect(state => ({
        player: state.player,
        events: state.events
    }), null)(IndexPage)

