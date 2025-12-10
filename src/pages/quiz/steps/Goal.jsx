import { Row, Col, Card } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import QuizOptionCard from '../../../components/ui/cards/QuizOptionCard';

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
    <Card className="border-0 shadow-sm" style={{ background: 'var(--color-card-background)', borderRadius: '1.25rem', minHeight: '650px', width: '100%' }}>
      <Card.Body className="p-4 p-md-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-2" style={{ color: 'var(--color-text-tertiary)', fontSize: '0.9rem' }}>
            <CgGym size="1.6rem" />
            <span>Step {stepIndex + 1} of {totalSteps} · Goal</span>
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

        <h1 className="mb-2 fw-bold" style={{ color: 'var(--color-text-primary)' }}>What is your primary training goal?</h1>
        <p className="mb-4" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
          This helps shape your program structure, exercise selection, and progression.
        </p>

        <Row className="g-3">
          {goals.map((goal) => (
            <Col xs={12} key={goal}>
              <QuizOptionCard
                selected={selected === goal}
                onClick={() => handleSelect(goal)}
              >
                {goal}
              </QuizOptionCard>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-end mt-5">
          <button
            type="button"
            className="btn btn-primary rounded-pill px-4 py-2 fw-bold"
            disabled={!selected}
            onClick={handleContinue}
            style={{ background: 'var(--color-primary)', border: 'none' }}
          >
            Continue
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default GoalStep;
