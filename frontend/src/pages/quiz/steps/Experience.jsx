import { Row, Col } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';

const levels = ['Beginner', 'Intermediate', 'Advanced'];

function ExperienceStep({ value, stepIndex, totalSteps, onChange, onNext, onBack }) {
  const [selected, setSelected] = useState(value || '');

  useEffect(() => {
    setSelected(value || '');
  }, [value]);

  function handleSelect(level) {
    setSelected(level);
    onChange(level);
  }

  function handleContinue() {
    if (!selected) return;
    onNext();
  }

  return (
    <Row className="justify-content-center">
      <Col lg={8}>
        <div className="quiz-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center gap-2 quiz-label">
              <CgGym size="1.6rem" />
              <span>Step {stepIndex + 1} of {totalSteps} · Experience</span>
            </div>
            <div className="quiz-step-dots">
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot" />
              <span className="quiz-dot" />
              <span className="quiz-dot" />
            </div>
          </div>
          <h1 className="quiz-title">How experienced are you with training?</h1>
          <p className="quiz-subtitle">
            This affects exercise choices, volume, and how aggressive your progression is.
          </p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {levels.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => handleSelect(level)}
                className={
                  'quiz-option btn' +
                  (selected === level ? ' quiz-option-active' : '')
                }
              >
                {level}
              </button>
            ))}
          </div>
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
              disabled={!selected}
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

export default ExperienceStep;
