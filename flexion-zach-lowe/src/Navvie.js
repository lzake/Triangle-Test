import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class Navvie extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="sticky-top seeThrough">
        <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/" className="text-white zachLogo">
                        <h1>Zachariah Lowe Triangle Test</h1>
                    </NavbarBrand>
          <NavbarToggler onClick={this.toggle} className="mt-3 pull-right border-white"/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="ml-auto h4 text-white zachLogo" href="https://github.com/lzake">GitHub</NavLink>
              </NavItem>
              <NavItem>
              <NavLink className="ml-auto h4 text-white zachLogo" href="https://www.linkedin.com/in/zachariahlowe">LinkedIn</NavLink>
             </NavItem>
              <NavItem>
              <NavLink className="ml-auto h4 text-white zachLogo" href="/components/">Youtube Video</NavLink>
             </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}