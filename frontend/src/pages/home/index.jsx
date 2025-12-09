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

  const testimonials = [
    {
      id: 1,
      name: "Alex R.",
      role: "Muscle Building",
      quote: "The personalized plan actually adapted to my 3-day schedule. Finally seeing progress after months of stagnation.",
      initial: "A",
    },
    {
      id: 2,
      name: "Sarah K.",
      role: "Weight Loss",
      quote: "I love that I don't have to guess what to eat. The macro breakdowns are spot on and easy to follow.",
      initial: "S",
    },
    {
      id: 3,
      name: "Mike T.",
      role: "Strength Training",
      quote: "Simple, effective, and straight to the point. The dashboard tracks my PRs automatically.",
      initial: "M",
    }
  ];

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
          <Col lg={10} className="mx-auto text-center">
            <h1 className="ai-home-title">
              Build Your Training Plan In Minutes
            </h1>
            <h2 className="ai-home-subtitle mx-auto">
              Answer a short quiz, tap on the muscles you want to train, and get a
              structured workout and nutrition plan tailored to your goals, schedule,
              and equipment.
            </h2>
            <div className="flex-wrap gap-2 mt-4 justify-content-center d-flex">
              <span className="ai-home-pill">Goal-based programming</span>
              <span className="ai-home-pill">Equipment-aware plans</span>
              <span className="ai-home-pill">Clickable body map</span>
            </div>
            <div className="ai-home-cta-row d-flex flex-wrap gap-3 mt-4 justify-content-center">
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
              <WorkoutCard workout={workout} />
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

      <section className="ai-home-section">
        <div className="section-header d-flex align-items-center justify-content-between">
          <h2 className="section-title d-flex align-items-center">
            <FaCheckCircle className="me-2 section-icon" />
            What Users Say
          </h2>
        </div>
        <Row className="g-4">
          {testimonials.map((t) => (
            <Col key={t.id} xs={12} md={4}>
              <div className="ai-home-testimonial-card">
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}
export default HomePage;