import { Row, Col, Card, Form } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import QuizOptionCard from '../../../components/ui/cards/QuizOptionCard';

const dayOptions = [2, 3, 4, 5, 6];
const lengthOptions = [30, 45, 60, 75];

function ScheduleStep({
  daysPerWeek,
  sessionLength,
  stepIndex,
  totalSteps,
  onChange,
  onNext,
  onBack
}) {
  const [days, setDays] = useState(daysPerWeek || 3);
  const [length, setLength] = useState(sessionLength || 45);

  useEffect(() => {
    setDays(daysPerWeek || 3);
    setLength(sessionLength || 45);
  }, [daysPerWeek, sessionLength]);

  function handleContinue() {
    if (!days || !length) return;
    onChange({ daysPerWeek: days, sessionLength: length });
    onNext();
  }

  return (
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Card className="border-0 shadow-sm" style={{ background: 'var(--color-card-background)', borderRadius: '1.25rem', minHeight: '650px' }}>
          <Card.Body className="p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-2" style={{ color: 'var(--color-text-tertiary)', fontSize: '0.9rem' }}>
                <CgGym size="1.6rem" />
                <span>Step {stepIndex + 1} of {totalSteps} · Schedule</span>
              </div>
              <div className="d-flex gap-1">
                {[...Array(totalSteps)].map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: i <= stepIndex ? 'var(--color-primary)' : 'var(--color-border-default)'
                    }}
                  />
                ))}
              </div>
            </div>

            <h1 className="mb-2 fw-bold" style={{ color: 'var(--color-text-primary)' }}>What does your weekly schedule look like?</h1>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
              Your plan will be tailored to how often and how long you can train.
            </p>

            <Row className="gy-4">
              <Col md={6}>
                <h5 className="mb-3" style={{ color: 'var(--color-text-primary)', fontSize: '1rem', fontWeight: 600 }}>Days per week</h5>
                <Row className="g-2">
                  {dayOptions.map((d) => (
                    <Col xs={4} sm={4} key={d}>
                      <QuizOptionCard
                        selected={days === d}
                        onClick={() => setDays(d)}
                        className="text-center justify-content-center"
                      >
                        {d} Days
                      </QuizOptionCard>
                    </Col>
                  ))}
                </Row>
              </Col>

              <Col md={6}>
                <h5 className="mb-3" style={{ color: 'var(--color-text-primary)', fontSize: '1rem', fontWeight: 600 }}>Time per workout</h5>
                <Row className="g-2">
                  {lengthOptions.map((m) => (
                    <Col xs={6} key={m}>
                      <QuizOptionCard
                        selected={length === m}
                        onClick={() => setLength(m)}
                        className="text-center justify-content-center"
                      >
                        {m} Min
                      </QuizOptionCard>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            <div className="d-flex justify-content-between mt-5">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill px-4"
                onClick={onBack}
                style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-pill px-4 py-2 fw-bold"
                onClick={handleContinue}
                style={{ background: 'var(--color-primary)', border: 'none' }}
              >
                Continue
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ScheduleStep;
