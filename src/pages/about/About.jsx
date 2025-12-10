import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaBullseye, FaBolt, FaChartLine, FaCheckCircle } from 'react-icons/fa';

function About() {
    return (
        <Container className="page-container py-5">
            {/* Header Section */}
            <div className="text-center mb-5 pb-3">
                <h1 className="display-4 fw-bold mb-3" style={{ color: 'var(--color-primary)' }}>Empowering Your Fitness Journey</h1>
                <p className="lead mx-auto text-secondary" style={{ maxWidth: '700px' }}>
                    We combine advanced algorithms with proven training principles to create accessible, effective, and personalized workout plans for everyone.
                </p>
            </div>

            {/* Feature Cards */}
            <Row className="g-4 mb-5">
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm" style={{ background: 'var(--color-card-background)', padding: '2rem', borderRadius: '1rem' }}>
                        <Card.Body className="text-center">
                            <div className="mb-4 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(99, 102, 241, 0.1)' }}>
                                <FaBullseye size="1.8rem" color="var(--color-primary)" />
                            </div>
                            <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Smart Goals</h3>
                            <p className="mb-0" style={{ color: 'var(--color-text-secondary)' }}>
                                Our intelligent system adapts to your specific goals, ensuring every rep counts towards your actual progress, not just random movement.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm" style={{ background: 'var(--color-card-background)', padding: '2rem', borderRadius: '1rem' }}>
                        <Card.Body className="text-center">
                            <div className="mb-4 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(245, 158, 11, 0.1)' }}>
                                <FaBolt size="1.8rem" style={{ color: '#f59e0b' }} />
                            </div>
                            <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Efficient Training</h3>
                            <p className="mb-0" style={{ color: 'var(--color-text-secondary)' }}>
                                Get optimized workout splits that fit your schedule perfectly. Whether you have 15 minutes or 2 hours, we maximize your ROI.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="h-100 border-0 shadow-sm" style={{ background: 'var(--color-card-background)', padding: '2rem', borderRadius: '1rem' }}>
                        <Card.Body className="text-center">
                            <div className="mb-4 d-inline-flex justify-content-center align-items-center rounded-circle" style={{ width: '60px', height: '60px', background: 'rgba(16, 185, 129, 0.1)' }}>
                                <FaChartLine size="1.8rem" style={{ color: '#10b981' }} />
                            </div>
                            <h3 className="h4 fw-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>Data Driven</h3>
                            <p className="mb-0" style={{ color: 'var(--color-text-secondary)' }}>
                                Track your improvements with detailed analytics. See how far you've come and visualize your strength gains over time.
                            </p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Mission Section */}
            <Row className="justify-content-center mb-5">
                <Col lg={10}>
                    <Card className="border-0 shadow-sm overflow-hidden" style={{ background: 'var(--color-card-background)', borderRadius: '1.5rem' }}>
                        <Row className="g-0 align-items-center">
                            <Col md={6} className="p-5">
                                <h3 className="fw-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>Our Mission</h3>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex align-items-start gap-3">
                                        <FaCheckCircle className="mt-1" style={{ color: 'var(--color-primary)', minWidth: '20px' }} />
                                        <span style={{ color: 'var(--color-text-secondary)' }}>To democratize access to elite-level programming logic.</span>
                                    </div>
                                    <div className="d-flex align-items-start gap-3">
                                        <FaCheckCircle className="mt-1" style={{ color: 'var(--color-primary)', minWidth: '20px' }} />
                                        <span style={{ color: 'var(--color-text-secondary)' }}>To reduce the confusion and noise in the fitness industry.</span>
                                    </div>
                                    <div className="d-flex align-items-start gap-3">
                                        <FaCheckCircle className="mt-1" style={{ color: 'var(--color-primary)', minWidth: '20px' }} />
                                        <span style={{ color: 'var(--color-text-secondary)' }}>To help 1 million people execute their first perfect workout.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6} style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, #4338ca 100%)', minHeight: '320px' }} className="d-flex align-items-center justify-content-center p-5">
                                <div className="text-white text-center">
                                    <div className="display-1 fw-bold mb-0">10k+</div>
                                    <div className="text-white-50">Workouts Generated</div>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>




        </Container>
    );
}

export default About;

