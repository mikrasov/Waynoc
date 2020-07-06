import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import {Nav, Navbar} from 'react-bootstrap'
import { CookiesProvider } from 'react-cookie'
import BackgroundImage from 'gatsby-background-image'

import Metadata from "./metadata"
import './bootstrap.min.css'
import './layout.css'

import LogRocket from 'logrocket'
import setupLogRocketReact from 'logrocket-react'
LogRocket.init('ewoekj/waynoc')
setupLogRocketReact(LogRocket)

export default (props) => <StaticQuery
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
        <CookiesProvider>
        <BackgroundImage
            fluid={data.background.childImageSharp.fluid}
            backgroundColor={`#1e6f00`}
        >
            <Metadata/>
            <Navbar className="navbar-light sticky-top" expand="sm" style={{backgroundColor: "#fff"}}>
                <Navbar.Brand href="/">Waynoc</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className={(props.active === "home") ? "active" : ""}>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className={'container'}>
                <div id='content' className={props.className}>{props.children}</div>
            </div>
        </BackgroundImage>
        </CookiesProvider>
    </>
    }
/>


