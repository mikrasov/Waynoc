import React, {useState} from 'react'
import {graphql, StaticQuery} from 'gatsby'
import {connect} from "react-redux"
import {Button, Modal, Nav, Navbar} from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import '../css/bootstrap.min.css'
import '../css/layout.css'

import Metadata from "./metadata"
import {resetGame} from "../state"
import Season from "./season"
import AgeYMD from "./age_ymd"


function Layout({dispatch, player, active, className, children}) {
    const [showReset, setShowReset] = useState(false)

    function triggerReset(){
        dispatch(resetGame())
        setShowReset(false)
    }

    return <StaticQuery
        query={graphql`{
         background: file(relativePath: { eq: "background.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 6000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
      }
    `}
        render={data => <>
            <Metadata/>

            <BackgroundImage
                fluid={data.background.childImageSharp.fluid}
                className={"background-image"}
                backgroundColor={`#1e6f00`}
            >
                <div className={'container'}>
                    <Navbar className="navbar-dark sticky-top" expand="sm" style={{backgroundColor: "#5e4523"}}>
                        <Navbar.Brand href="/">Waynoc</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="mr-auto">
                                <Nav.Link href="/" className={(active === "game") ? "active" : ""}>Game</Nav.Link>
                                <Nav.Link href="/player" className={(active === "player") ? "active" : ""}>{player?.name?player.name:"Player"}</Nav.Link>
                                <Nav.Link href="/log" className={(active === "log") ? "active" : ""}>Log</Nav.Link>
                                <Nav.Link onClick={()=>setShowReset(true)}>Reset</Nav.Link>
                            </Nav>

                            <AgeYMD age={player.age} className="game-time"/>
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

                    <Season season={player?.age  * 4}/>
                    <div className='content'>
                        <div  className={className}>{children}</div>
                    </div>
                </div>

            </BackgroundImage>

        </>
        }
    />
}


export default connect(state => ({
    player: state.player,
}), null)(Layout)

