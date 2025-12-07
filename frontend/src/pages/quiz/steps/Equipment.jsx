import { Row, Col, Form } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';

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
    <Row className="justify-content-center">
      <Col lg={8}>
        <div className="quiz-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center gap-2 quiz-label">
              <CgGym size="1.6rem" />
              <span>Step {stepIndex + 1} of {totalSteps} · Equipment</span>
            </div>
            <div className="quiz-step-dots">
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot" />
              <span className="quiz-dot" />
            </div>
          </div>
          <h1 className="quiz-title">What equipment do you have access to?</h1>
          <p className="quiz-subtitle">
            Your plan will only include exercises that match the equipment you select.
          </p>
          <div className="quiz-equipment-grid mt-3">
            {options.map((label) => (
              <button
                key={label}
                type="button"
                className={
                  'quiz-equipment-option' +
                  (selected.includes(label) ? ' quiz-equipment-option-active' : '')
                }
                onClick={() => toggle(label)}
              >
                <Form.Check
                  type="checkbox"
                  checked={selected.includes(label)}
                  readOnly
                  className="me-2"
                />
                <span>{label}</span>
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
              disabled={!selected.length}
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

export default EquipmentStep;
