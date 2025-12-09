import { Card, Button, Badge } from 'react-bootstrap';

function FoodPlanCard({ plan }) {
  return (
    <Card className="food-plan-card h-100">
      <Card.Header className="food-plan-header d-flex justify-content-between align-items-center">
        <Card.Title as="h4" className="mb-0">{plan.name}</Card.Title>
        <Badge bg="warning" text="dark">{plan.focus}</Badge>
      </Card.Header>
      <Card.Body className="food-plan-body">
        <div className="food-plan-info d-flex justify-content-around mb-3">
          <div className="text-center">
            <strong className="d-block">{plan.meals}</strong>
            <span>Meals/Day</span>
          </div>
          <div className="text-center">
            <strong className="d-block">{plan.calories}</strong>
            <span>Calories</span>
          </div>
        </div>
        <Button variant="outline-primary" className="w-100">View Plan</Button>
      </Card.Body>
    </Card>
  );
}

export default FoodPlanCard;

