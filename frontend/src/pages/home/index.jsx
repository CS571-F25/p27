import '../../App.css';
import './styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { FaFire, FaUtensils, FaCheckCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { recommendedWorkouts, foodPlans } from '../../data/mockData';
import WorkoutCard from '../../components/WorkoutCard';
import FoodPlanCard from '../../components/FoodPlanCard';
function HomePage() {
  const navigate = useNavigate();

  function handleStartPlan() {
    navigate('/quiz');
  }

  function handleHowItWorks() {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <Container className="page-container">
      <section className="ai-home-hero-section">
        <Row className="align-items-center gy-4">
          <Col lg={7}>
            <div className="ai-home-hero-left">
              <div className="ai-home-hero-label d-inline-flex align-items-center mb-3">
                <CgGym size="1.8rem" className="me-2" />
                <span>AI-guided training</span>
              </div>
              <h1 className="ai-home-title">
                Build Your Training Plan In Minutes
              </h1>
              <p className="ai-home-subtitle">
                Answer a short quiz, tap on the muscles you want to train, and get a
                structured workout and nutrition plan tailored to your goals, schedule,
                and equipment.
              </p>
              <div className="ai-home-pill-row d-flex flex-wrap gap-2 mt-3">
                <span className="ai-home-pill">Goal-based programming</span>
                <span className="ai-home-pill">Equipment-aware plans</span>
                <span className="ai-home-pill">Clickable body map</span>
              </div>
              <div className="ai-home-cta-row d-flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  className="btn ai-home-btn-primary"
                  onClick={handleStartPlan}
                >
                  Start Your Plan
                </button>
                <button
                  type="button"
                  className="btn ai-home-btn-secondary"
                  onClick={handleHowItWorks}
                >
                  How It Works
                </button>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="ai-home-preview-card">
              <div className="ai-home-step-dots">
                <span className="ai-home-dot ai-home-dot-active" />
                <span className="ai-home-dot" />
                <span className="ai-home-dot" />
                <span className="ai-home-dot" />
                <span className="ai-home-dot" />
                <span className="ai-home-step-text ms-2">
                  Goal ▸ Experience ▸ Equipment ▸ Schedule ▸ Body
                </span>
              </div>
              <h3 className="ai-home-preview-title">Preview: Quiz Step</h3>
              <p className="ai-home-preview-text">
                Tell the AI what you want from training to shape your plan.
              </p>
              <div className="d-flex flex-wrap gap-2 mt-3">
                <button type="button" className="ai-home-mini-option ai-home-mini-option-active">
                  Build Muscle
                </button>
                <button type="button" className="ai-home-mini-option">
                  Lose Fat
                </button>
                <button type="button" className="ai-home-mini-option">
                  Get Stronger
                </button>
                <button type="button" className="ai-home-mini-option">
                  Improve Mobility
                </button>
              </div>
              <ul className="ai-home-preview-list mt-3">
                <li>
                  <FaCheckCircle className="ai-home-preview-icon" />
                  Adapts to your days per week
                </li>
                <li>
                  <FaCheckCircle className="ai-home-preview-icon" />
                  Uses only the equipment you have
                </li>
                <li>
                  <FaCheckCircle className="ai-home-preview-icon" />
                  Focuses on the muscles you select
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>

      <section
        id="how-it-works"
        className="ai-home-section ai-home-how-section"
      >
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
        </div>
        <Row className="gy-4">
          <Col md={4}>
            <div className="ai-home-how-card">
              <span className="ai-home-how-step">Step 1</span>
              <h3>Take the quiz</h3>
              <p>
                Set your goal, experience level, schedule, and available equipment so
                the engine understands your constraints.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="ai-home-how-card">
              <span className="ai-home-how-step">Step 2</span>
              <h3>Select muscles</h3>
              <p>
                Tap on the interactive body map to tell the AI exactly which areas you
                want to prioritize.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="ai-home-how-card">
              <span className="ai-home-how-step">Step 3</span>
              <h3>Get your plan</h3>
              <p>
                Instantly receive a training split and exercise list you can start
                using today, with optional nutrition guidance.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="ai-home-section">
        <div className="section-header d-flex align-items-center justify-content-between">
          <h2 className="section-title d-flex align-items-center">
            <FaFire className="me-2 section-icon" />
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

      <section className="ai-home-section">
        <div className="section-header d-flex align-items-center justify-content-between">
          <h2 className="section-title d-flex align-items-center">
            <FaUtensils className="me-2 section-icon" />
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