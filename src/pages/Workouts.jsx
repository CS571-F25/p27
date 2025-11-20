import { useState } from 'react';
import '../App.css';
import { Container, Card, Alert, ListGroup, Badge, Button, Row, Col, Table } from 'react-bootstrap';
import { recommendedWorkouts } from '../data/mockData';
import WorkoutCard from '../components/WorkoutCard';

function Workouts() {
    const [selectedWorkout, setSelectedWorkout] = useState(null);

    const recentWorkouts = [
        { id: 1, name: 'Full Body Strength', date: '2024-01-15', duration: '45 min', exercises: 4 },
        { id: 2, name: 'Cardio Blast', date: '2024-01-14', duration: '30 min', exercises: 4 },
        { id: 3, name: 'Upper Body Focus', date: '2024-01-13', duration: '40 min', exercises: 4 },
    ];

    return (
        <Container className="page-container" style={{ color: 'var(--color-text-primary)' }}>
            <div className="page-header">
                <h1 className="page-title">Workouts</h1>
                <p className="page-subtitle">Track and manage your training sessions</p>
            </div>

            <Row className="g-4 mb-4">
                <Col xs={12}>
                    <Alert variant="info">
                        <Alert.Heading>Your Workout Dashboard</Alert.Heading>
                        Track your progress, view history, and discover new workouts.
                    </Alert>
                </Col>
            </Row>

            <Row className="g-4 mb-4">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title>Quick Start Workouts</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="g-3">
                                {recommendedWorkouts.slice(0, 3).map((workout) => (
                                    <Col key={workout.id} xs={12} md={6} lg={4}>
                                        <WorkoutCard workout={workout} isRecommended={false} />
                                    </Col>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="g-4">
                <Col xs={12} lg={6}>
                    <Card className="page-card">
                        <Card.Header>
                            <Card.Title>Recent Workouts</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Table striped hover responsive>
                                <thead>
                                    <tr>
                                        <th>Workout</th>
                                        <th>Date</th>
                                        <th>Duration</th>
                                        <th>Exercises</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentWorkouts.map((workout) => (
                                        <tr key={workout.id}>
                                            <td>{workout.name}</td>
                                            <td>{workout.date}</td>
                                            <td>{workout.duration}</td>
                                            <td>
                                                <Badge bg="primary">{workout.exercises}</Badge>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6}>
                    <Card className="page-card">
                        <Card.Header>
                            <Card.Title>Features</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Log exercises, sets, and reps
                                    <Badge bg="success">Available</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Track your progress over time
                                    <Badge bg="success">Available</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    View workout history
                                    <Badge bg="primary">New</Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="d-flex justify-content-between align-items-center">
                                    Set personal records and goals
                                    <Badge bg="info">Coming Soon</Badge>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Workouts;

