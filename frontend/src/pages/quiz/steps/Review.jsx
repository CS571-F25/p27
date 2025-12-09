import { Row, Col, Card } from 'react-bootstrap';
import { CgGym } from 'react-icons/cg';
import { useState } from 'react';

function ReviewStep({ answers, stepIndex, totalSteps, onBack }) {
  const [isLoading, setIsLoading] = useState(false);
  const [planText, setPlanText] = useState('');
  const [error, setError] = useState('');
  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  async function handleGenerate() {
    if (isLoading) return;
    setIsLoading(true);
    setError('');
    setPlanText('');

    try {
      const res = await fetch(`${API_BASE}/api/generate-plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers })
      });

      if (!res.ok) {
        throw new Error('Failed to generate plan');
      }

      const data = await res.json();
      setPlanText(data.plan || '');

      // Save to LocalStorage
      const newWorkout = {
        id: Date.now(),
        name: `AI Plan: ${answers.goal}`,
        date: new Date().toISOString().split('T')[0],
        duration: `${answers.sessionLength} min`,
        exercises: answers.focusMuscles.length || 5, // Estimate
        plan: data.plan
      };

      const existing = JSON.parse(localStorage.getItem('savedWorkouts') || '[]');
      localStorage.setItem('savedWorkouts', JSON.stringify([newWorkout, ...existing]));
    } catch (e) {
      setError('Something went wrong while generating your plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Row className="justify-content-center">
      <Col lg={10} xl={8}>
        <Card className="border-0 shadow-sm" style={{ background: 'var(--color-card-background)', borderRadius: '1.25rem', minHeight: '650px' }}>
          <Card.Body className="p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="d-flex align-items-center gap-2" style={{ color: 'var(--color-text-tertiary)', fontSize: '0.9rem' }}>
                <CgGym size="1.6rem" />
                <span>Step {stepIndex + 1} of {totalSteps} · Review</span>
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

            <h1 className="mb-2 fw-bold" style={{ color: 'var(--color-text-primary)' }}>Review your choices</h1>
            <p className="mb-4" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
              Confirm your preferences before generating your plan.
            </p>

            <Row className="g-3">
              {[
                { label: 'Goal', value: answers.goal || '-' },
                { label: 'Experience', value: answers.experience || '-' },
                { label: 'Equipment', value: answers.equipment?.length ? answers.equipment.join(', ') : '-' },
                { label: 'Schedule', value: `${answers.daysPerWeek} days · ${answers.sessionLength} min` }
              ].map((item, idx) => (
                <Col xs={12} md={6} key={idx}>
                  <div className="p-3 rounded-4" style={{ background: 'var(--color-background-tertiary)' }}>
                    <div className="text-uppercase mb-1" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>{item.label}</div>
                    <div className="fw-semibold" style={{ color: 'var(--color-text-primary)' }}>{item.value}</div>
                  </div>
                </Col>
              ))}

              <Col xs={12}>
                <div className="p-3 rounded-4" style={{ background: 'var(--color-background-tertiary)' }}>
                  <div className="text-uppercase mb-2" style={{ fontSize: '0.75rem', letterSpacing: '0.05em', color: 'var(--color-text-secondary)' }}>Body Focus</div>
                  <div className="d-flex flex-wrap gap-2">
                    {answers.focusMuscles && answers.focusMuscles.length ? (
                      answers.focusMuscles.map((m) => (
                        <span key={m} className="px-2 py-1 rounded-pill bg-white border" style={{ fontSize: '0.85rem' }}>{m}</span>
                      ))
                    ) : (
                      <span className="text-muted fst-italic">No muscles selected</span>
                    )}
                  </div>
                </div>
              </Col>
            </Row>

            {isLoading && (
              <div className="mt-4 p-4 rounded-4 text-center" style={{ background: 'var(--color-background-tertiary)' }}>
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <h5 className="mb-2" style={{ color: 'var(--color-text-primary)' }}>Generating your plan...</h5>
                <p className="small mb-0 text-muted">Analyzing goal · Matching equipment · Building sessions</p>
              </div>
            )}

            {error && (
              <div className="alert alert-danger mt-4 rounded-4 border-0">
                {error}
              </div>
            )}

            {planText && !isLoading && (
              <div className="mt-4 p-4 rounded-4" style={{ background: 'var(--color-background-tertiary)' }}>
                <h5 className="mb-3" style={{ color: 'var(--color-text-primary)' }}>Your generated plan</h5>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {planText.split('\n').filter(l => l.trim()).map((line, idx) => (
                    <p key={idx} className="mb-1" style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>{line}</p>
                  ))}
                </div>
              </div>
            )}

            <div className="d-flex justify-content-between mt-5">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-pill px-4"
                onClick={onBack}
                disabled={isLoading}
                style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-primary)' }}
              >
                Back
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-pill px-4 py-2 fw-bold"
                onClick={handleGenerate}
                disabled={isLoading}
                style={{ background: 'var(--color-primary)', border: 'none' }}
              >
                {isLoading ? 'Generating...' : 'Generate plan'}
              </button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ReviewStep;
