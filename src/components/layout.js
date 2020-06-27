import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import Metadata from "./metadata";
import './bootstrap.min.css'
import './layout.css'

export default (props) => (
  <>
      <Metadata />
      <Navbar  className="navbar-light sticky-top" expand="sm" style={{backgroundColor: "#fff"}}>
          <Navbar.Brand href="/">Waynoc</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="mr-auto" >
                  <Nav.Link href="/" className={(props.active==="home")?"active":""}>Home</Nav.Link>
              </Nav>


          </Navbar.Collapse>
      </Navbar>

      <div className={'container'}><div id='content' className={props.className}>{props.children}</div></div>
  </>
)
