import { Container, Nav, Navbar } from "react-bootstrap";
import { Link as ScrollLink } from "react-scroll";
import viteLogo from '/vite.svg'
import { useState } from "react";

function NavBar() {

    const navigation = [
        { id: '1N', name: "Home", to: "Home" },
        { id: '2N', name: "About Me", to: "About" },

    ]

    const toggleExpanded = () => setExpanded((prevState) => !prevState);
    const [isExpanded, setExpanded] = useState(false);
    const closeExpanded = function () {
        setTimeout(function () {
            setExpanded(false);
        }, 250);
    };

    return (
        <Navbar
            id='nav'
            expand="lg"
            expanded={isExpanded}
            fixed="top"
            className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#"><img
                    alt="Logo"
                    src={viteLogo}
                    width="35"
                    height="35"
                    className="rounded-circle"
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"
                    onClick={toggleExpanded} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav navbarScroll className="me-auto">
                        {navigation.map((item) => (
                            <Nav.Item key={item.id}>
                                <ScrollLink
                                    to={item.to}
                                    spy={true}
                                    activeClass="active"
                                    className="nav-link"
                                    onClick={closeExpanded}
                                >
                                    {item.name}
                                </ScrollLink>
                            </Nav.Item>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;