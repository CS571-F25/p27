import { Row, Col } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState, useEffect } from 'react';

const muscles = [
  'chest',
  'back',
  'shoulders',
  'biceps',
  'triceps',
  'abs',
  'glutes',
  'quads',
  'hamstrings',
  'calves'
];

function BodyStep({ value, stepIndex, totalSteps, onChange, onNext, onBack }) {
  const [selected, setSelected] = useState(value || []);

  useEffect(() => {
    setSelected(value || []);
  }, [value]);

  function toggle(m) {
    setSelected((prev) => {
      if (prev.includes(m)) {
        const updated = prev.filter((x) => x !== m);
        onChange(updated);
        return updated;
      }
      const updated = [...prev, m];
      onChange(updated);
      return updated;
    });
  }

  function handleContinue() {
    if (!selected.length) return;
    onNext();
  }

  function isSelected(m) {
    return selected.includes(m);
  }

  function fillFor(m) {
    return isSelected(m) ? 'var(--color-accent-green)' : 'var(--color-card-background)';
  }

  return (
    <Row className="justify-content-center">
      <Col lg={9}>
        <div className="quiz-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center gap-2 quiz-label">
              <CgGym size="1.6rem" />
              <span>Step {stepIndex + 1} of {totalSteps} · Body focus</span>
            </div>
            <div className="quiz-step-dots">
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
            </div>
          </div>
          <h1 className="quiz-title">Which areas do you want to focus on?</h1>
          <p className="quiz-subtitle">
            Tap on the body map and we will prioritize those muscles in your plan.
          </p>
          <Row className="mt-3 gy-3">
            <Col md={6}>
              <div className="quiz-body-picker">
                <svg viewBox="0 0 200 400" className="quiz-body-svg">
                  <ellipse
                    cx="100"
                    cy="55"
                    rx="18"
                    ry="20"
                    fill={fillFor('back')}
                    onClick={() => toggle('back')}
                  />
                  <rect
                    x="75"
                    y="80"
                    width="50"
                    height="45"
                    rx="10"
                    fill={fillFor('chest')}
                    onClick={() => toggle('chest')}
                  />
                  <rect
                    x="75"
                    y="125"
                    width="50"
                    height="30"
                    rx="10"
                    fill={fillFor('abs')}
                    onClick={() => toggle('abs')}
                  />
                  <rect
                    x="60"
                    y="80"
                    width="15"
                    height="70"
                    rx="10"
                    fill={fillFor('shoulders')}
                    onClick={() => toggle('shoulders')}
                  />
                  <rect
                    x="125"
                    y="80"
                    width="15"
                    height="70"
                    rx="10"
                    fill={fillFor('shoulders')}
                    onClick={() => toggle('shoulders')}
                  />
                  <rect
                    x="55"
                    y="115"
                    width="12"
                    height="55"
                    rx="8"
                    fill={fillFor('biceps')}
                    onClick={() => toggle('biceps')}
                  />
                  <rect
                    x="133"
                    y="115"
                    width="12"
                    height="55"
                    rx="8"
                    fill={fillFor('biceps')}
                    onClick={() => toggle('biceps')}
                  />
                  <rect
                    x="55"
                    y="170"
                    width="12"
                    height="50"
                    rx="8"
                    fill={fillFor('triceps')}
                    onClick={() => toggle('triceps')}
                  />
                  <rect
                    x="133"
                    y="170"
                    width="12"
                    height="50"
                    rx="8"
                    fill={fillFor('triceps')}
                    onClick={() => toggle('triceps')}
                  />
                  <ellipse
                    cx="100"
                    cy="160"
                    rx="20"
                    ry="12"
                    fill={fillFor('glutes')}
                    onClick={() => toggle('glutes')}
                  />
                  <rect
                    x="65"
                    y="175"
                    width="25"
                    height="75"
                    rx="12"
                    fill={fillFor('quads')}
                    onClick={() => toggle('quads')}
                  />
                  <rect
                    x="110"
                    y="175"
                    width="25"
                    height="75"
                    rx="12"
                    fill={fillFor('quads')}
                    onClick={() => toggle('quads')}
                  />
                  <rect
                    x="70"
                    y="250"
                    width="20"
                    height="60"
                    rx="10"
                    fill={fillFor('hamstrings')}
                    onClick={() => toggle('hamstrings')}
                  />
                  <rect
                    x="110"
                    y="250"
                    width="20"
                    height="60"
                    rx="10"
                    fill={fillFor('hamstrings')}
                    onClick={() => toggle('hamstrings')}
                  />
                  <rect
                    x="70"
                    y="310"
                    width="20"
                    height="50"
                    rx="10"
                    fill={fillFor('calves')}
                    onClick={() => toggle('calves')}
                  />
                  <rect
                    x="110"
                    y="310"
                    width="20"
                    height="50"
                    rx="10"
                    fill={fillFor('calves')}
                    onClick={() => toggle('calves')}
                  />
                </svg>
              </div>
            </Col>
            <Col md={6}>
              <div className="quiz-body-list">
                <div className="quiz-body-selected-label">
                  Selected muscles
                </div>
                <div className="quiz-body-tags">
                  {selected.length === 0 && (
                    <span className="quiz-body-tag quiz-body-tag-empty">
                      No muscles selected yet
                    </span>
                  )}
                  {selected.map((m) => (
                    <span key={m} className="quiz-body-tag">
                      {m}
                    </span>
                  ))}
                </div>
                <div className="quiz-body-presets">
                  <div className="quiz-body-presets-label">Quick presets</div>
                  <div className="d-flex flex-wrap gap-2 mt-1">
                    <button
                      type="button"
                      className="quiz-option btn"
                      onClick={() => {
                        const v = ['chest', 'back', 'legs'];
                        setSelected(v);
                        onChange(v);
                      }}
                    >
                      Upper + lower
                    </button>
                    <button
                      type="button"
                      className="quiz-option btn"
                      onClick={() => {
                        const v = ['chest', 'back', 'shoulders', 'arms', 'quads', 'hamstrings', 'calves', 'glutes'];
                        setSelected(v);
                        onChange(v);
                      }}
                    >
                      Full body
                    </button>
                  </div>
                </div>
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

export default BodyStep;
