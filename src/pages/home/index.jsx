import '../../App.css';
import './styles.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { FaFire, FaUtensils, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { recommendedWorkouts, foodPlans } from '../../data/mockData';
import WorkoutCard from '../../components/ui/cards/workout/WorkoutCard';
import FoodPlanCard from '../../components/ui/cards/food/FoodPlanCard';
import { testimonials } from '../../data/mockData';
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

  function handleStartRecommendedWorkout(workout) {
    navigate('/workouts', { state: { activeWorkout: workout } });
  }

  return (
    <Container className="page-container">
      <section className="ai-home-hero-section">
        <Row className="align-items-center gy-5">
          <Col lg={10} className="mx-auto text-center">
            <h1 className="ai-home-title mb-4">
              Build Your Training Plan In Minutes
            </h1>
            <h2 className="ai-home-subtitle mx-auto mb-5">
              Answer a short quiz, tap on the muscles you want to train, and get a
              structured workout and nutrition plan tailored to your goals, schedule,
              and equipment.
            </h2>
            <div className="flex-wrap gap-3 mt-5 justify-content-center d-flex">
              <span className="ai-home-pill">Goal-based programming</span>
              <span className="ai-home-pill">Equipment-aware plans</span>
              <span className="ai-home-pill">Clickable body map</span>
            </div>
            <div className="ai-home-cta-row d-flex flex-wrap gap-4 mt-5 justify-content-center">
              <button
                type="button"
                className="btn ai-home-btn-primary btn-lg"
                onClick={handleStartPlan}
              >
                Start Your Plan
              </button>
              <button
                type="button"
                className="btn ai-home-btn-secondary btn-lg"
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
        <div className="section-header text-center mb-5 justify-content-center">
          <h2 className="section-title">How It Works</h2>
        </div>
        <Row className="g-5">
          <Col md={4}>
            <div className="ai-home-how-card h-100">
              <span className="ai-home-how-step">Step 1</span>
              <h3>Take the quiz</h3>
              <p>
                Set your goal, experience level, schedule, and available equipment so
                the engine understands your constraints.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="ai-home-how-card h-100">
              <span className="ai-home-how-step">Step 2</span>
              <h3>Select muscles</h3>
              <p>
                Tap on the interactive body map to tell the AI exactly which areas you
                want to prioritize.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="ai-home-how-card h-100">
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
        <div className="section-header mb-5 text-center">
          <h2 className="section-title d-flex align-items-center justify-content-center">
            <FaCheckCircle className="me-3 section-icon" />
            What Users Say
          </h2>
        </div>

        {/* Mobile Carousel (1 item) */}
        <div className="d-block d-md-none">
          <Carousel
            variant="dark"
            indicators={false}
            interval={3000}
            className="pb-5"
            prevIcon={<FaChevronLeft size="1.5rem" color="var(--color-primary)" />}
            nextIcon={<FaChevronRight size="1.5rem" color="var(--color-primary)" />}
          >
            {testimonials.map((t) => (
              <Carousel.Item key={t.id}>
                <div className="d-flex justify-content-center px-4 h-100">
                  <div className="ai-home-testimonial-card text-center w-100">
                    <p className="testimonial-quote mb-4">"{t.quote}"</p>
                    <div className="testimonial-author d-flex flex-column align-items-center justify-content-center">
                      <div className="testimonial-avatar mb-3">{t.initial}</div>
                      <div className="testimonial-info text-center">
                        <h4 className="mb-1">{t.name}</h4>
                        <span className="text-muted">{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        {/* Desktop Carousel (3 items) */}
        <div className="d-none d-md-block">
          <Carousel
            variant="dark"
            indicators={false}
            interval={3000}
            className="pb-5"
            prevIcon={<FaChevronLeft size="2rem" color="var(--color-primary)" />}
            nextIcon={<FaChevronRight size="2rem" color="var(--color-primary)" />}
          >
            {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
              <Carousel.Item key={idx}>
                <Row className="g-4 px-5">
                  {testimonials.slice(idx * 3, idx * 3 + 3).map((t) => (
                    <Col md={4} key={t.id}>
                      <div className="ai-home-testimonial-card text-center">
                        <p className="testimonial-quote mb-4">"{t.quote}"</p>
                        <div className="testimonial-author d-flex flex-column align-items-center justify-content-center mt-auto">
                          <div className="testimonial-avatar mb-3">{t.initial}</div>
                          <div className="testimonial-info text-center">
                            <h4 className="mb-1">{t.name}</h4>
                            <span className="text-muted">{t.role}</span>
                          </div>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="ai-home-section">
        <div className="section-header mb-5">
          <h2 className="section-title d-flex align-items-center">
            <FaFire className="me-3 section-icon" />
            Recommended Workouts
          </h2>
        </div>
        <Row className="g-5">
          {recommendedWorkouts.map((workout) => (
            <Col key={workout.id} xs={12} md={6} lg={4}>
              <WorkoutCard
                workout={workout}
                isRecommended={true}
                onStart={() => handleStartRecommendedWorkout(workout)}
              />
            </Col>
          ))}
        </Row>
      </section>

      <section className="ai-home-section">
        <div className="section-header mb-5">
          <h2 className="section-title d-flex align-items-center">
            <FaUtensils className="me-3 section-icon" />
            Nutrition Plans
          </h2>
        </div>
        <Row className="g-5">
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