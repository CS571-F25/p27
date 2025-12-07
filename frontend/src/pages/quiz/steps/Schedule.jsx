import { Row, Col, Form } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';

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
      <Col lg={8}>
        <div className="quiz-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center gap-2 quiz-label">
              <CgGym size="1.6rem" />
              <span>Step {stepIndex + 1} of {totalSteps} · Schedule</span>
            </div>
            <div className="quiz-step-dots">
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot" />
            </div>
          </div>
          <h1 className="quiz-title">What does your weekly schedule look like?</h1>
          <p className="quiz-subtitle">
            Your plan will be tailored to how often and how long you can train.
          </p>
          <Row className="mt-3 gy-3">
            <Col md={6}>
              <Form.Label className="quiz-field-label">
                Days per week
              </Form.Label>
              <div className="d-flex flex-wrap gap-2">
                {dayOptions.map((d) => (
                  <button
                    key={d}
                    type="button"
                    className={
                      'quiz-option btn' + (days === d ? ' quiz-option-active' : '')
                    }
                    onClick={() => setDays(d)}
                  >
                    {d} days
                  </button>
                ))}
              </div>
            </Col>
            <Col md={6}>
              <Form.Label className="quiz-field-label">
                Time per workout
              </Form.Label>
              <div className="d-flex flex-wrap gap-2">
                {lengthOptions.map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={
                      'quiz-option btn' + (length === m ? ' quiz-option-active' : '')
                    }
                    onClick={() => setLength(m)}
                  >
                    {m} min
                  </button>
                ))}
              </div>
            </Col>
          </Row>
          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn quiz-btn-back"
              onClick={onBack}
            >
              Back
            </button>
            <button
              type="button"
              className="btn quiz-btn-next"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ScheduleStep;
