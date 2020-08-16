import React from "react"
import { Row, Col, Form} from "react-bootstrap"
import {connect} from "react-redux"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

const _ = require("lodash")

function CharacterCreator( {stats, stats_meta}){

    const data  = useStaticQuery( graphql`{
      logo: file(relativePath: { eq: "NPU-shield.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`)


    //If the stat has sub stats
    return <>

        <Row>
            <Col>
                <h2>New Pompeii University</h2>
                <h4>Graduate Education</h4>

                We are happy you chose New Pompeii University the premier graduate institution of the Ross system.
                Please tell us a little about yourself.
            </Col>
            <Col>
                <Img
                    fluid={data.logo.childImageSharp.fluid}
                    alt="New Pompei University"
                    style={{maxWidth:"200px"}}
                />
            </Col>
        </Row>

        <Form.Group>
            <Row>
                <Col><Form.Control size="lg" type="text" placeholder="First Name" /></Col>
                <Col><Form.Control size="lg" type="text" placeholder="Last Name" /></Col>
            </Row>

            <Row>
                <Col>
                    <Form.Control as="select" size="lg">
                        <option>Earth Galactic Remote University</option>
                        <option>Ross Planetary University</option>
                        <option>Trinity Christian College</option>
                    </Form.Control>
                </Col>
                <Col>
                    <Form.Control as="select" size="lg">
                        <option>Political Science</option>
                        <option>Computer Science</option>
                        <option>Religious Studies</option>
                        <option>Philosophy</option>
                        <option>Mechanical Engineering</option>
                        <option>Psychology</option>
                    </Form.Control>
                </Col>
            </Row>


        </Form.Group>
    </>
}

export default connect(state => ({stats: state.stats, stats_meta: state.stats_meta}), null)(CharacterCreator)

