import { Navbar, Container,Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

//Icons and logo
import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/nav-icon1.svg';
import GitHub from '../assets/img/nav-icon2.svg';
import X from '../assets/img/nav-icon3.svg';


export const NavBar = () => {
    const [activeLink,setActiveLink]= useState ('skills');
    const [scrolled,seScrolled] = useState(false);
    useEffect(() =>{
        const onScroll = () =>{
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg"className ={scrolled? "scrolled":""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Inicio</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
                        <Nav.Link href="#myprojects"className={activeLink === 'myprojects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jordan-ayuzo-pacheco-336964303/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                            <a href="https://github.com/JordanAyuzo" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" /></a>
                            <a href="https://twitter.com/AyuzoJordan" target="_blank"rel="noopener noreferrer"><img src={X} alt="x" /></a>

                        </div>
                        <button className="vvd" onClick={() => window.location.href = 'mailto:jordanayuzopacheco@gmail.com'}>
                            <span>Contáctame</span>
                        </button>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}