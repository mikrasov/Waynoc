import React, {useState} from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {connect} from "react-redux"
import {Button, Modal, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import './bootstrap.min.css'
import './layout.css'

import Metadata from "./metadata"
import {resetGame, loadData} from "../../state/actions"


function Index({dispatch, game, active, className, children}) {
    const [showReset, setShowReset] = useState(false)

    function triggerReset(){
        dispatch(resetGame())
        setShowReset(false)
    }

    const data  = useStaticQuery( graphql`{
          events: allMarkdownStorybook {
            nodes {
              id
              filename
              title
              hast
            }
          },
          background: file(relativePath: { eq: "background.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 6000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }`)





    if(!game.dataLoaded) dispatch(loadData(data.events.nodes,{}))

    return <>
        <Metadata/>

        <BackgroundImage
            fluid={data.background.childImageSharp.fluid}
            className={"background-image"}
            backgroundColor={`#000`}
        >
            <div className={'container '+(active==="admin"?"admin":"")}>
                <Navbar className="navbar-dark sticky-top" expand="sm" >
                    <Navbar.Brand href="/">Malastra</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" className={(active === "game") ? "active" : ""}>Game</Nav.Link>
                            <Nav.Link href="/player" className={(active === "player") ? "active" : ""}>{game?.name?game.name:"Player"}</Nav.Link>
                            <Nav.Link href="/log" className={(active === "log") ? "active" : ""}>Log</Nav.Link>


                            <NavDropdown title="Admin" className={(active === "admin") ? "active" : ""}>
                                <NavDropdown.Item href="/admin/">Game State</NavDropdown.Item>
                                <NavDropdown.Item href="/admin/events">Event Graph</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link onClick={()=>setShowReset(true)}>Reset</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>

                <Modal show={showReset} onHide={()=>setShowReset(false)} >
                    <Modal.Header closeButton>
                        <Modal.Title>Restart the game?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Warning! This is not reversable!</Modal.Body>
                    <Modal.Footer>
                        <Button type="button" variant="danger" size="lg" onClick={triggerReset}>Restart</Button>
                        <Button type="button" variant="primary" size="lg" onClick={()=>setShowReset(false)}>Cancel</Button>
                    </Modal.Footer>
                </Modal>


                <div className='content'>
                    <div  className={className}>{children}</div>
                </div>
            </div>

        </BackgroundImage>

    </>

}


export default connect(state => ({game: state}), null)(Index)

