import { Card, Button, Badge } from 'react-bootstrap';
import { FaClock, FaFire } from 'react-icons/fa';

function WorkoutCard({ workout }) {
  return (
    <Card className={`workout-card ${workout.isRecommended ? 'recommended' : ''} h-100`}>
      <Card.Header className="workout-card-header d-flex justify-content-between align-items-center">
        <Card.Title as="h4" className="mb-0">{workout.name}</Card.Title>
        {workout.isRecommended && <Badge bg="danger">Recommended</Badge>}
      </Card.Header>
      <Card.Body className="workout-card-body">
        <div className="workout-info mb-2">
          <FaClock /> {workout.duration}
        </div>
        <div className="workout-info mb-2">
          <FaFire /> {workout.calories} cal
        </div>
        <div className="workout-difficulty mb-3">
          <Badge bg="secondary">{workout.difficulty}</Badge>
        </div>
        <div className="workout-exercises mb-3">
          <strong>Exercises:</strong>
          <ul>
            {workout.exercises.map((exercise, idx) => (
              <li key={idx}>{exercise}</li>
            ))}
          </ul>
        </div>
        <Button variant="primary" className="w-100">Start Workout</Button>
      </Card.Body>
    </Card>
  );
}

export default WorkoutCard;

