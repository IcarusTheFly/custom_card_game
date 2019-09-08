import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarToggler,
    Collapse,
    Jumbotron } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showNavbar: false
        }
        this.navbarToggle = this.navbarToggle.bind(this);
    }

    navbarToggle() {
        this.setState({
            showNavbar: !this.state.showNavbar
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/">Custom card game</NavbarBrand>
                        <NavbarToggler onClick={this.navbarToggle}/>
                        <Collapse isOpen={this.state.showNavbar} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink href="/home">
                                        <i className="fa fa-list"></i> Game Rules
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/cards">
                                        <i className="fa fa-image"></i> Cards
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/about">
                                        <i className="fa fa-info"></i> About us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Custom card game</h1>
                                <p>This is the website for your custom card game!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;