import { useState } from 'react';
import '../App.css';
import { Container, Card, Accordion, Form, Button, Badge, ListGroup } from 'react-bootstrap';
import ProfileSettingSection from '../components/ProfileSettingSection';

function Profile() {
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 28,
        weight: 75,
        height: 180,
        goal: 'muscle',
        targetWeight: 80,
        activityLevel: 'moderate'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    return (
        <Container className="page-container">
            <div className="page-header">
                <h1 className="page-title">Profile</h1>
                <p className="page-subtitle">Manage your personal information and goals</p>
            </div>

            <Row className="g-4">
                <Col xs={12} lg={4}>
                    <Card className="page-card h-100 text-center p-4">
                        <div className="mx-auto mb-3" style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--color-primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', color: 'white', fontWeight: 'bold' }}>
                            {formData.name.charAt(0)}
                        </div>
                        <h3>{formData.name}</h3>
                        <p className="text-muted mb-4">{formData.email}</p>
                        <div className="d-flex justify-content-center gap-2">
                            <Badge bg="primary">{formData.goal}</Badge>
                            <Badge bg="secondary">{formData.activityLevel}</Badge>
                        </div>
                    </Card>
                </Col>

                <Col xs={12} lg={8}>
                    <Card className="page-card mb-4">
                        <Card.Header>
                            <Card.Title>Profile Settings</Card.Title>
                        </Card.Header>
                        <Card.Body className="page-content">
                            <Accordion defaultActiveKey="0">
                                <ProfileSettingSection title="Personal Information" eventKey="0">
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Full Name</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Age</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="age"
                                                        value={formData.age}
                                                        onChange={handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">Save Changes</Button>
                                    </Form>
                                </ProfileSettingSection>

                                <ProfileSettingSection title="Fitness Goals" eventKey="1">
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Goal Type</Form.Label>
                                                    <Form.Select
                                                        name="goal"
                                                        value={formData.goal}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="muscle">Muscle Building</option>
                                                        <option value="weight-loss">Weight Loss</option>
                                                        <option value="maintenance">Maintenance</option>
                                                        <option value="endurance">Endurance</option>
                                                    </Form.Select>
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group className="mb-3">
                                                    <Form.Label>Target Weight (kg)</Form.Label>
                                                    <Form.Control
                                                        type="number"
                                                        name="targetWeight"
                                                        value={formData.targetWeight}
                                                        onChange={handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button variant="primary" type="submit">Save Goals</Button>
                                    </Form>
                                </ProfileSettingSection>

                                <ProfileSettingSection title="Achievements" eventKey="2">
                                    <ListGroup variant="flush">
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>First Workout</strong>
                                                <p className="mb-0 text-muted">Completed your first workout</p>
                                            </div>
                                            <Badge bg="success">Unlocked</Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>Week Warrior</strong>
                                                <p className="mb-0 text-muted">Complete 7 workouts in a week</p>
                                            </div>
                                            <Badge bg="secondary">Locked</Badge>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </ProfileSettingSection>
                            </Accordion>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;

