import { Row, Col, Card } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';
import QuizOptionCard from '../../../components/ui/cards/QuizOptionCard';

const options = [
  'Commercial gym',
  'Dumbbells',
  'Barbell + rack',
  'Bands',
  'Bodyweight only'
];

function EquipmentStep({ value, stepIndex, totalSteps, onChange, onNext, onBack }) {
  const [selected, setSelected] = useState(value || []);

  useEffect(() => {
    setSelected(value || []);
  }, [value]);

  function toggle(label) {
    setSelected((prev) => {
      if (prev.includes(label)) {
        const updated = prev.filter((x) => x !== label);
        onChange(updated);
        return updated;
      }
      const updated = [...prev, label];
      onChange(updated);
      return updated;
    });
  }

  function handleContinue() {
    if (!selected.length) return;
    onNext();
  }

  return (
    <Card className="border-0 shadow-sm" style={{ background: 'var(--color-card-background)', borderRadius: '1.25rem', minHeight: '650px', width: '100%' }}>
      <Card.Body className="p-4 p-md-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex align-items-center gap-2" style={{ color: 'var(--color-text-tertiary)', fontSize: '0.9rem' }}>
            <CgGym size="1.6rem" />
            <span>Step {stepIndex + 1} of {totalSteps} · Equipment</span>
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

        <h1 className="mb-2 fw-bold" style={{ color: 'var(--color-text-primary)' }}>What equipment do you have access to?</h1>
        <p className="mb-4" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
          Your plan will only include exercises that match the equipment you select.
        </p>

        <Row className="g-3">
          {options.map((label) => (
            <Col xs={12} key={label}>
              <QuizOptionCard
                selected={selected.includes(label)}
                onClick={() => toggle(label)}
                showCheckbox={true}
              >
                {label}
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
            disabled={!selected.length}
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

export default EquipmentStep;
