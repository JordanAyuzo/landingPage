    import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
    import { ProjectCard } from "./ProjectCard";
    import scrum from "../assets/img/SrumFundation.png";
    import SFKada from "../assets/img/SFKS.jpg";
    import MLUAMex from "../assets/img/IntroduccionML.jpg"
    import colorSharp2 from "../assets/img/color-sharp2.png"

    export const Projects = () => {

    const projects = [
        {
        title: "Scrum Foundation",
        description: "Certificación Profesional de Scrum Foundation a través de CertiProf.",
        imgUrl: scrum,
        },
        {
        title: "Taller Scrum Foundation",
        description: "Participación del curso para Scrum Foundation a través de KadaSoftware.",
        imgUrl: SFKada,
        },
        {
            title: "Taller a Introducción al Machine Learning",
            description: "Participación en el curso introductorio al Machine Learning a través de la UAEMex. ",
            imgUrl: MLUAMex,
            },
    ];

    return (
        <section className="project" id="myprojects">
        <Container>
            <Row>
            <Col size={12}>
                    <h2>Proyectos</h2>
                    <p>.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="certificate">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                        <Nav.Link eventKey="certificate">Certificaciones</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="projects">Proyectos</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp">
                        <Tab.Pane eventKey="certificate">
                        <Row>
                            {
                            projects.map((project, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                            }
                        </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="projects">
                        <p>¿Qué tal?, Estoy trabajando en esta sección para que puedan conocer mis proyectos realizados</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
            </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="Fondo"></img>
        </section>
    )
    }