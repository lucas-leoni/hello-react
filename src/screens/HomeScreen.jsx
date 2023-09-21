import { Col, Container, Navbar, Row } from 'react-bootstrap';
import './HomeScreen.css';
import { NavBar as Fulano } from './NavBar';

export default function HomeScreen() {
    return (
        <main>
            <div class="container borda">
                <div class="row">
                    <Container>
                        <Row>
                            <Col
                                md="6"
                                xs="4"
                            >
                                Col 6
                            </Col>
                            <Col
                                md="6"
                                xs="4"
                            >
                                Col 6
                            </Col>
                        </Row>
                    </Container>
                    <div class=" col-md-6 borda fundo-madeira">
                        <h1 class="h1">Titulo 1</h1>
                        <img
                            src="https://media2.giphy.com/media/r9r83yARcai0nyAbpZ/giphy.gif?cid=6c09b952jmhlu1g9ze8whbswzido6h3gad85y3us8qjcnta7&ep=v1_stickers_related&rid=giphy.gif&ct=s"
                            alt="" />
                        <h2>Titulo 2</h2>
                        <h3>Título 3</h3>
                        <h4>Título 4</h4>
                        <h5>Titúlo 5</h5>
                        <h6>Titúlo 5</h6>
                        <p>Parágrafo com <a href="//google.com.br">link</a></p>
                    </div>
                    <div class="col-md-6 borda">
                        <div class="row">
                            <div class="col-12 col-md-6 borda">
                                <h2>Coluna da direita</h2>
                            </div>
                            <div class="col-12 col-md-6 borda">
                                <h2>Coluna da direita</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 borda">
                        <h2>Coluna da direita</h2>
                    </div>
                </div>
            </div>

        </main>

    )
}