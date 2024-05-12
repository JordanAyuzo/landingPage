    import { Container, Row, Col } from "react-bootstrap";
    import navIcon1 from "../assets/img/nav-icon1.svg";
    import navIcon2 from "../assets/img/nav-icon2.svg";
    import navIcon3 from "../assets/img/nav-icon3.svg";

    export const Footer = () => {
    return (
        <footer className="footer">
        <Container>
            <Row className="align-items-center">
            <Col size={12} sm={6}>
            <p>Recursos externos utilizados</p>
            

<a href="https://iconscout.com/illustrations/man" class="text-underline font-size-sm" target="_blank">Man developing website on desk</a> by <a href="https://iconscout.com/contributors/woobrodesign" class="text-underline font-size-sm">WOOBRO LTD</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Copyright 2024. All Rights Reserved</p>
                <div className="social-icon">
                <a href="https://www.linkedin.com/in/jordan-ayuzo-pacheco-336964303/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
                <a href="https://github.com/JordanAyuzo" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://twitter.com/AyuzoJordan" ><img src={navIcon3} alt="Icon" /></a>
                </div>
            </Col>
            </Row>
        </Container>
        </footer>
    )
    }