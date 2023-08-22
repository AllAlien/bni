import { Container, Row, Col, Card, Form, Button } from "react-bootstrap"
import '../../App.css'
export default function TelaLogin (){

    return (

        <Container>
            <Row className="rowLogin">
                <Col xs={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title className="textCenter">BNI LOGIN</Card.Title>
                                <Card.Text>
                                        <Form className="formLogin">
                                            <Form.Group>
                                                <Form.Label>Digite seu e-mail</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your e-mail"/>
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Digite sua senha</Form.Label>
                                                <Form.Control type="password" placeholder="Enter your password"/>
                                            </Form.Group>
                                            <Button variant={'success'}>Logar</Button>
                                        </Form>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                </Col>
            </Row>
        </Container>
    )
}