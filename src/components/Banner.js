import { Container, Row, Col} from "react-bootstrap";
import { useState,useEffect } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(1- Math.random() * 100);
    const [index, setIndex] = useState(0);
    const toRotate = [ "Ing. En computación", "Programador Jr."];
    const period = 350;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
    }, delta);

    return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(period);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return(
        <div>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <span className="tagline">Bienvenido a mi portafolio.</span>
                            
                            <h1>{`Hola, mi nombre es Jordan`}</h1>
                            <h3><span className="wrap">| {text}</span></h3>
                            
                            <p>Soy desarrollador. Me gusta crear soluciones prácticas y funcionales. ¿Listo para colaborar juntos?</p>
                            <button href="#about" onClick={() => console.log('connect')}>
                                Acerca de mi  <ArrowRightCircle size={25}/>
                            </button>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <img src = {headerImg} alt="Headder img"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}