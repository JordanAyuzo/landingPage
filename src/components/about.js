
    import { Container, Row, Col } from "react-bootstrap";
    import contactImg from "../assets/img/contact-img.svg";
    export const About = () => {
    return (
    <section className="contact" id="about">
        <Container>
            <Row className="align-items-center">
                <Col size={12} md={6}>
                    <img src={contactImg} alt="Contact Us"/>
                </Col>
                <Col size={12} md={6}>
                    <div>
                        <h2>Acerca de Mí</h2>
                        <p>¡Hola! Soy Jordan Ayuzo Pacheco, un estudiante  de la Universidad Tecnológica de Mixteca. Me apasiona la programación ya que  me impulsa a explorar constantemente nuevos horizontes y tecnologías. He participado en proyectos de realidad virtual y aumentada hasta desarrollo web, me encanta sumergirme en desafíos innovadores y aprender de cada experiencia. Mi objetivo es seguir creciendo como profesional, contribuyendo con soluciones creativas y eficientes en el mundo de la tecnología.</p>

                        <p>Además, disfruto colaborar en equipo y compartir mis conocimientos con otras personas que se interesan por la tecnología. Participar en eventos donde puedo transmitir mi pasión y conocimiento tecnológico a los demás es una experiencia que me llena de satisfacción. Creo firmemente en el poder del trabajo en equipo y en la importancia de inspirar a otros a través del intercambio de ideas y el aprendizaje.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
    }