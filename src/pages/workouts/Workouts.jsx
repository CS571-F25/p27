import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import '../../App.css';
import { Container, Alert, ListGroup, Badge, Button, Row, Col, Table } from 'react-bootstrap';
import { recommendedWorkouts } from '../../data/mockData';
import WorkoutCard from '../../components/ui/cards/workout/WorkoutCard';
import PageSectionCard from '../../components/ui/cards/PageSectionCard';
import ActiveWorkoutSession from './ActiveWorkoutSession';

function Workouts() {
    const [savedWorkouts, setSavedWorkouts] = useState([]);
    const [activeWorkout, setActiveWorkout] = useState(null);

    const location = useLocation();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('savedWorkouts') || '[]');
        setSavedWorkouts(saved);

        if (location.state?.activeWorkout) {
            setActiveWorkout(location.state.activeWorkout);
            // Clear state so we don't re-open on refresh (optional but good practice)
            window.history.replaceState({}, document.title);
        }
    }, [location.state]);

    const recentWorkouts = [
        ...savedWorkouts,
        { id: 1, name: 'Full Body Strength', date: '2024-01-15', duration: '45 min', exercises: 4 },
        { id: 2, name: 'Cardio Blast', date: '2024-01-14', duration: '30 min', exercises: 4 },
        { id: 3, name: 'Upper Body Focus', date: '2024-01-13', duration: '40 min', exercises: 4 },
    ];

    const handleStartWorkout = (workout) => {
        setActiveWorkout(workout);
    };

    const handleCloseSession = () => {
        setActiveWorkout(null);
    };

    return (
        <Container className="page-container" style={{ color: 'var(--color-text-primary)' }}>
            {activeWorkout && (
                <ActiveWorkoutSession
                    workout={activeWorkout}
                    onClose={handleCloseSession}
                />
            )}

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
                    <PageSectionCard title="Quick Start Workouts" className="text-center">
                        <Row className="g-3">
                            {recommendedWorkouts.slice(0, 3).map((workout) => (
                                <Col key={workout.id} xs={12} md={6} lg={4}>
                                    <WorkoutCard
                                        workout={workout}
                                        isRecommended={false}
                                        onStart={handleStartWorkout}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </PageSectionCard>
                </Col>
            </Row>

            <Row className="g-4">
                <Col xs={12} lg={6}>
                    <PageSectionCard title="Recent & Saved Workouts">
                        <Table hover responsive style={{ verticalAlign: 'middle' }}>
                            <thead>
                                <tr>
                                    <th>Workout</th>
                                    <th>Duration</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentWorkouts.map((workout, idx) => (
                                    <tr key={workout.id || idx}>
                                        <td>
                                            <div className="fw-semibold">{workout.name}</div>
                                            <div className="small text-muted">{workout.date}</div>
                                        </td>
                                        <td>{workout.duration}</td>
                                        <td className="text-end">
                                            <Button
                                                variant="outline-primary"
                                                size="sm"
                                                className="rounded-pill"
                                                onClick={() => handleStartWorkout(workout)}
                                            >
                                                Start
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </PageSectionCard>
                </Col>
                <Col xs={12} lg={6}>
                    <PageSectionCard title="Features">
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
                    </PageSectionCard>
                </Col>
            </Row>
        </Container>
    );
}

export default Workouts;

