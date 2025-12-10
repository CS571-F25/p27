import { Row, Col, Card } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import QuizOptionCard from '../../../components/ui/cards/QuizOptionCard';

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
    <Card className="border-0 shadow-sm" style={{ background: 'var(--color-card-background)', borderRadius: '1.25rem', minHeight: '650px', width: '100%' }}>
      <Card.Body className="p-4 p-md-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-2" style={{ color: 'var(--color-text-tertiary)', fontSize: '0.9rem' }}>
            <CgGym size="1.6rem" />
            <span>Step {stepIndex + 1} of {totalSteps} · Experience</span>
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

        <h1 className="mb-2 fw-bold" style={{ color: 'var(--color-text-primary)' }}>How experienced are you with training?</h1>
        <p className="mb-4" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
          This affects exercise choices, volume, and how aggressive your progression is.
        </p>

        <Row className="g-3">
          {levels.map((level) => (
            <Col xs={12} key={level}>
              <QuizOptionCard
                selected={selected === level}
                onClick={() => handleSelect(level)}
              >
                {level}
              </QuizOptionCard>
            </Col>
          ))}
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

export default ExperienceStep;
