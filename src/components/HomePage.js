import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "../CSS/HomePage.css";

import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel, ResponsiveEmbed} from "react-bootstrap";

import slideImage1 from "../assets/lab-plant.jpg";
import slideImage2 from "../assets/microscope.jpg";
import slideImage3 from "../assets/beakers.jpg";


class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() {
		return(
			<div className="BackgroundContainer">
				<div className="BackgroundImage">
					<div style={{height:"100%", width:"100%", backgroundColor:"black", opacity:"0.5"}}>
					</div>
				</div>
				<Navbar bg="light" expand="lg" fixed="top">
				  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav">
				    <Nav className="mr-auto">
				      <Nav.Link href="#home">Home</Nav.Link>
				      <Nav.Link href="#link">Link</Nav.Link>
				      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
				        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
				        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
				        <NavDropdown.Divider />
				        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
				      </NavDropdown>
				    </Nav>
				    <Form inline>
				      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
				      <Button variant="outline-success">Search</Button>
				    </Form>
				  </Navbar.Collapse>
				</Navbar>
				<div className="HomepageContainerOne">

					<div style={{height:"65vh", width:"100vw"}}>
						<div style={{height:"100%", 
							width:"100%",
							display:"flex", 
							justifyContent:"center", 
							alignItems:"center",
							color:"white",
							fontSize: "8.5vh"
						}}>
							<p>Welcome to This Company's Website</p>
						</div>
					</div>
					<Carousel>
					  <Carousel.Item>
					  	<div style={{height:"35vh", width:"100vw"}}>
					      <ResponsiveEmbed aspectRatio="4by3">
						    <embed type="image/jpg" src={slideImage1} />
						  </ResponsiveEmbed>
						</div>
					    <Carousel.Caption>
					      <h3>First slide label</h3>
					      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <div style={{height:"35vh", width:"100vw",}}>
					      <ResponsiveEmbed aspectRatio="4by3">
						    <embed type="image/jpg" src={slideImage2} />
						  </ResponsiveEmbed>
						</div>
					    <Carousel.Caption>
					      <h3>Second slide label</h3>
					      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					  <Carousel.Item>
					    <div style={{height:"35vh", width:"100vw",}}>
					      <ResponsiveEmbed aspectRatio="4by3">
						    <embed type="image/jpg" src={slideImage3} />
						  </ResponsiveEmbed>
						</div>
					    <Carousel.Caption>
					      <h3>Third slide label</h3>
					      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					    </Carousel.Caption>
					  </Carousel.Item>
					</Carousel>
				</div>
				<div className="HomepageContainerTwo">
				</div>
			</div>

		);
	}
}

export default HomePage;