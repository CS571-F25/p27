import '../App.css';
import { Container, Card, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container className="page-container">
            <div className="page-header">
                <h1 className="page-title">About</h1>
                <p className="page-subtitle">Learn more about our personal training platform</p>
            </div>
            <Row className="g-4">
                <Col xs={12} lg={8}>
                    <Card className="page-card">
                        <Card.Header>
                            <Card.Title>Welcome</Card.Title>
                        </Card.Header>
                        <Card.Body className="page-content">
                            <p>
                                Welcome to Personal Training, your comprehensive fitness companion designed to help you
                                achieve your training goals.
                            </p>
                            <p>
                                Our platform provides tools to track workouts, monitor progress, and maintain a personalized
                                fitness profile. Whether you're a beginner or an experienced athlete, we're here to support
                                your fitness journey.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={4}>
                    <Card className="page-card">
                        <Card.Header>
                            <Card.Title>Features</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled">
                                <li className="mb-2">✓ Workout Tracking</li>
                                <li className="mb-2">✓ Progress Monitoring</li>
                                <li className="mb-2">✓ Nutrition Plans</li>
                                <li className="mb-2">✓ Goal Setting</li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;

