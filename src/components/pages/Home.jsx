import '../../App.css'
import { Container, Row, Col, Card } from 'react-bootstrap'
export default function Home (){

    return (
            <Container>
                <Row className='textCenter'>
                    <Col xs={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Seu saldo atual</Card.Title>
                                <Card.Text>
                                    R$ 500.000
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
    )
}