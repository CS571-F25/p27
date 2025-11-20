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
            
            <Card className="page-card mb-4">
                <Card.Header>
                    <Card.Title>Profile Settings</Card.Title>
                </Card.Header>
                <Card.Body className="page-content">
                    <Accordion defaultActiveKey="0">
                        <ProfileSettingSection title="Personal Information" eventKey="0">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        min="1"
                                        max="120"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">Save Changes</Button>
                            </Form>
                        </ProfileSettingSection>

                        <ProfileSettingSection title="Fitness Goals" eventKey="1">
                            <Form onSubmit={handleSubmit}>
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
                                <Form.Group className="mb-3">
                                    <Form.Label>Target Weight (kg)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="targetWeight"
                                        value={formData.targetWeight}
                                        onChange={handleInputChange}
                                        min="30"
                                        max="200"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Current Weight (kg)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="weight"
                                        value={formData.weight}
                                        onChange={handleInputChange}
                                        min="30"
                                        max="200"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Height (cm)</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="height"
                                        value={formData.height}
                                        onChange={handleInputChange}
                                        min="100"
                                        max="250"
                                    />
                                </Form.Group>
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
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>100 Workouts</strong>
                                        <p className="mb-0 text-muted">Complete 100 total workouts</p>
                                    </div>
                                    <Badge bg="secondary">Locked</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </ProfileSettingSection>

                        <ProfileSettingSection title="Preferences" eventKey="3">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Activity Level</Form.Label>
                                    <Form.Select
                                        name="activityLevel"
                                        value={formData.activityLevel}
                                        onChange={handleInputChange}
                                    >
                                        <option value="sedentary">Sedentary</option>
                                        <option value="light">Lightly Active</option>
                                        <option value="moderate">Moderately Active</option>
                                        <option value="active">Very Active</option>
                                        <option value="very-active">Extremely Active</option>
                                    </Form.Select>
                                </Form.Group>
                                <Form.Check
                                    type="switch"
                                    id="email-notifications"
                                    label="Email Notifications"
                                    defaultChecked
                                />
                                <Form.Check
                                    type="switch"
                                    id="workout-reminders"
                                    label="Workout Reminders"
                                    defaultChecked
                                    className="my-2"
                                />
                                <Form.Check
                                    type="switch"
                                    id="progress-tracking"
                                    label="Progress Tracking"
                                    defaultChecked
                                />
                                <Button variant="primary" type="submit" className="mt-3">Save Preferences</Button>
                            </Form>
                        </ProfileSettingSection>
                    </Accordion>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default Profile;

