import { Row, Col, Card } from 'react-bootstrap';
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
    return isSelected(m) ? 'var(--color-primary)' : 'var(--color-background-tertiary)';
  }

  return (
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Card className="border-0 shadow-sm" style={{ background: 'var(--color-card-background)', borderRadius: '1.25rem', minHeight: '650px' }}>
          <Card.Body className="p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-2" style={{ color: 'var(--color-text-tertiary)', fontSize: '0.9rem' }}>
                <CgGym size="1.6rem" />
                <span>Step {stepIndex + 1} of {totalSteps} · Body focus</span>
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

            <h1 className="mb-2 fw-bold" style={{ color: 'var(--color-text-primary)' }}>Which areas do you want to focus on?</h1>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
              Tap on the body map and we will prioritize those muscles in your plan.
            </p>

            <Row className="mt-3 gy-4">
              <Col md={6} className="d-flex justify-content-center">
                <div className="quiz-body-picker w-100 d-flex justify-content-center" style={{ background: 'var(--color-background)', borderRadius: '12px', padding: '1rem' }}>
                  <svg viewBox="0 0 200 400" className="quiz-body-svg" style={{ maxHeight: '350px', width: '100%' }}>
                    <ellipse
                      cx="100"
                      cy="55"
                      rx="18"
                      ry="20"
                      fill={fillFor('back')}
                      onClick={() => toggle('back')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="75"
                      y="80"
                      width="50"
                      height="45"
                      rx="10"
                      fill={fillFor('chest')}
                      onClick={() => toggle('chest')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="75"
                      y="125"
                      width="50"
                      height="30"
                      rx="10"
                      fill={fillFor('abs')}
                      onClick={() => toggle('abs')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="60"
                      y="80"
                      width="15"
                      height="70"
                      rx="10"
                      fill={fillFor('shoulders')}
                      onClick={() => toggle('shoulders')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="125"
                      y="80"
                      width="15"
                      height="70"
                      rx="10"
                      fill={fillFor('shoulders')}
                      onClick={() => toggle('shoulders')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="55"
                      y="115"
                      width="12"
                      height="55"
                      rx="8"
                      fill={fillFor('biceps')}
                      onClick={() => toggle('biceps')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="133"
                      y="115"
                      width="12"
                      height="55"
                      rx="8"
                      fill={fillFor('biceps')}
                      onClick={() => toggle('biceps')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="55"
                      y="170"
                      width="12"
                      height="50"
                      rx="8"
                      fill={fillFor('triceps')}
                      onClick={() => toggle('triceps')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="133"
                      y="170"
                      width="12"
                      height="50"
                      rx="8"
                      fill={fillFor('triceps')}
                      onClick={() => toggle('triceps')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <ellipse
                      cx="100"
                      cy="160"
                      rx="20"
                      ry="12"
                      fill={fillFor('glutes')}
                      onClick={() => toggle('glutes')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="65"
                      y="175"
                      width="25"
                      height="75"
                      rx="12"
                      fill={fillFor('quads')}
                      onClick={() => toggle('quads')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="110"
                      y="175"
                      width="25"
                      height="75"
                      rx="12"
                      fill={fillFor('quads')}
                      onClick={() => toggle('quads')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="70"
                      y="250"
                      width="20"
                      height="60"
                      rx="10"
                      fill={fillFor('hamstrings')}
                      onClick={() => toggle('hamstrings')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="110"
                      y="250"
                      width="20"
                      height="60"
                      rx="10"
                      fill={fillFor('hamstrings')}
                      onClick={() => toggle('hamstrings')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="70"
                      y="310"
                      width="20"
                      height="50"
                      rx="10"
                      fill={fillFor('calves')}
                      onClick={() => toggle('calves')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                    <rect
                      x="110"
                      y="310"
                      width="20"
                      height="50"
                      rx="10"
                      fill={fillFor('calves')}
                      onClick={() => toggle('calves')}
                      style={{ cursor: 'pointer', transition: 'fill 0.2s' }}
                    />
                  </svg>
                </div>
              </Col>

              <Col md={6}>
                <div className="h-100 d-flex flex-column">
                  <div className="mb-4">
                    <div className="text-uppercase mb-2" style={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)' }}>
                      Selected muscles
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {selected.length === 0 && (
                        <span className="text-muted fst-italic">
                          No muscles selected yet
                        </span>
                      )}
                      {selected.map((m) => (
                        <span key={m} className="px-3 py-1 rounded-pill" style={{ background: 'var(--color-primary)', color: 'white', fontSize: '0.85rem' }}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="text-uppercase mb-2" style={{ fontSize: '0.8rem', letterSpacing: '0.05em', color: 'var(--color-text-tertiary)' }}>Quick presets</div>
                    <div className="d-flex flex-wrap gap-2 mt-1">
                      <button
                        type="button"
                        className="btn btn-outline-secondary btn-sm rounded-pill"
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
                        className="btn btn-outline-secondary btn-sm rounded-pill"
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
      </Col>
    </Row>
  );
}

export default BodyStep;
