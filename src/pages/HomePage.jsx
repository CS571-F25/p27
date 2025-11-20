import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { FaFire, FaUtensils } from 'react-icons/fa';
import { recommendedWorkouts, foodPlans } from '../data/mockData';
import WorkoutCard from '../components/WorkoutCard';
import FoodPlanCard from '../components/FoodPlanCard';

function HomePage() {

  return (
    <Container className="page-container">
      <div className="homepage-hero">
        <CgGym size="6em" className="homepage-icon" />
        <h1 className="homepage-title">Personal Training</h1>
        <p className="homepage-subtitle">
          Transform your body, elevate your mind, achieve your goals
        </p>
      </div>
      <section className="homepage-section">
        <div className="section-header">
          <h2 className="section-title">
            <FaFire style={{ marginRight: '0.5rem' }} />
            Recommended Workouts
          </h2>
        </div>
        <Row className="g-4">
          {recommendedWorkouts.map((workout) => (
            <Col key={workout.id} xs={12} md={6} lg={4}>
              <WorkoutCard workout={workout} isRecommended={true} />
            </Col>
          ))}
        </Row>
      </section>
      <section className="homepage-section">
        <div className="section-header">
          <h2 className="section-title">
            <FaUtensils style={{ marginRight: '0.5rem' }} />
            Nutrition Plans
          </h2>
        </div>
        <Row className="g-4">
          {foodPlans.map((plan) => (
            <Col key={plan.id} xs={12} md={6} lg={4}>
              <FoodPlanCard plan={plan} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default HomePage;
