import '../../App.css';
import { Container, Card, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <Container className="page-container">
            <Card className="page-card mb-5 text-center border-0" style={{ background: 'var(--color-card-background)', padding: '3rem' }}>
                <Card.Body>
                    <h1 className="display-5 fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Empowering Your Fitness Journey</h1>
                    <p className="lead mx-auto mb-0" style={{ maxWidth: '700px', color: 'var(--color-text-secondary)' }}>
                        We combine advanced algorithms with proven training principles to create accessible, effective, and personalized workout plans for everyone.
                    </p>
                </Card.Body>
            </Card>

            <Row className="g-4 mb-5">
                <Col md={4}>
                    <Card className="h-100 border-0" style={{ background: 'var(--color-card-background)', padding: '2rem' }}>
                        <Card.Body className="text-center">
                            <div className="mb-3" style={{ fontSize: '2.5rem', color: 'var(--color-accent-green)' }}>🎯</div>
                            <h3 style={{ color: 'var(--color-text-primary)' }}>Smart Goals</h3>
                            <p style={{ color: 'var(--color-text-primary)' }}>Our intelligent system adapts to your specific goals, ensuring every rep counts towards your progress.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0" style={{ background: 'var(--color-card-background)', padding: '2rem' }}>
                        <Card.Body className="text-center">
                            <div className="mb-3" style={{ fontSize: '2.5rem', color: 'var(--color-accent-orange)' }}>⚡</div>
                            <h3 style={{ color: 'var(--color-text-primary)' }}>Efficient Training</h3>
                            <p style={{ color: 'var(--color-text-primary)' }}>Get optimized workout splits that fit your schedule, whether you have 15 minutes or 2 hours.</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0" style={{ background: 'var(--color-card-background)', padding: '2rem' }}>
                        <Card.Body className="text-center">
                            <div className="mb-3" style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>📊</div>
                            <h3 style={{ color: 'var(--color-text-primary)' }}>Data Driven</h3>
                            <p style={{ color: 'var(--color-text-primary)' }}>Track your improvements with detailed analytics and see how far you've come.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default About;

