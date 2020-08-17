import React from "react"
import {Row, Col, Form, Button, FormGroup} from "react-bootstrap"
import {connect} from "react-redux"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import {ACTIONS} from "../state"
import Stat from "./story-tags/stat"
const _ = require("lodash")

function CharacterCreator( {dispatch, stats, stats_meta}){

    const data  = useStaticQuery( graphql`{
      logo: file(relativePath: { eq: "NPU-shield.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`)



    const background = _.filter(stats_meta,{parent: 'background'})

    //If the stat has sub stats
    return <>
<Form>
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
                <FormGroup>{
                    _.filter(background,{ category:'undergrad'}).map( v => <>

                        <Form.Check type="radio">
        <Form.Check.Input type="radio"  />
        <Form.Check.Label><Stat stat={v.path}>{v.long}</Stat></Form.Check.Label>
        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
      </Form.Check>


                        </>
                    )}
                </FormGroup>

            </Row>
<Col>
                    <Form.Control as="select" size="lg">
                        { _.filter(background,{ category:'bachelors'}).map(v => <option>{v.long}</option>) }
                    </Form.Control>
                </Col>

        </Form.Group>
</Form>

        <div className="gamecontrols">
            <Button type="button"  className="finalChoice" size="lg"  onClick={ ()=>{dispatch(ACTIONS.resolveUI())} }>Submit</Button>
        </div>
    </>
}

export default connect(state => ({stats: state.stats, stats_meta: state.stats_meta}), null)(CharacterCreator)

