import { Row, Col } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';

const goals = ['Build Muscle', 'Lose Fat', 'Get Stronger', 'Improve Mobility'];

function GoalStep({ value, stepIndex, totalSteps, onChange, onNext }) {
  const [selected, setSelected] = useState(value || '');

  useEffect(() => {
    setSelected(value || '');
  }, [value]);

  function handleSelect(goal) {
    setSelected(goal);
    onChange(goal);
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
              <span>Step {stepIndex + 1} of {totalSteps} · Goal</span>
            </div>
            <div className="quiz-step-dots">
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot" />
              <span className="quiz-dot" />
              <span className="quiz-dot" />
              <span className="quiz-dot" />
            </div>
          </div>
          <h1 className="quiz-title">What is your primary training goal?</h1>
          <p className="quiz-subtitle">
            This helps shape your program structure, exercise selection, and progression.
          </p>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {goals.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => handleSelect(goal)}
                className={
                  'quiz-option btn' +
                  (selected === goal ? ' quiz-option-active' : '')
                }
              >
                {goal}
              </button>
            ))}
          </div>
          <div className="d-flex justify-content-end mt-4">
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

export default GoalStep;
