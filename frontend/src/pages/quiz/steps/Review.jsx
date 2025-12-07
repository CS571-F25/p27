import { Row, Col } from 'react-bootstrap';
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
    } catch (e) {
      setError('Something went wrong while generating your plan. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Row className="justify-content-center">
      <Col lg={9}>
        <div className="quiz-card">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="d-flex align-items-center gap-2 quiz-label">
              <CgGym size="1.6rem" />
              <span>Step {stepIndex + 1} of {totalSteps} · Review</span>
            </div>
            <div className="quiz-step-dots">
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
              <span className="quiz-dot quiz-dot-active" />
            </div>
          </div>

          <h1 className="quiz-title">Review your choices</h1>
          <p className="quiz-subtitle">
            Confirm your preferences before generating your plan.
          </p>

          <div className="quiz-review-grid mt-3">
            <div className="quiz-review-card">
              <div className="quiz-review-label">Goal</div>
              <div className="quiz-review-value">{answers.goal || '-'}</div>
            </div>
            <div className="quiz-review-card">
              <div className="quiz-review-label">Experience</div>
              <div className="quiz-review-value">{answers.experience || '-'}</div>
            </div>
            <div className="quiz-review-card">
              <div className="quiz-review-label">Equipment</div>
              <div className="quiz-review-value">
                {answers.equipment && answers.equipment.length
                  ? answers.equipment.join(', ')
                  : '-'}
              </div>
            </div>
            <div className="quiz-review-card">
              <div className="quiz-review-label">Schedule</div>
              <div className="quiz-review-value">
                {answers.daysPerWeek} days · {answers.sessionLength} min
              </div>
            </div>
            <div className="quiz-review-card quiz-review-card-full">
              <div className="quiz-review-label">Body focus</div>
              <div className="quiz-review-tags">
                {answers.focusMuscles && answers.focusMuscles.length ? (
                  answers.focusMuscles.map((m) => (
                    <span key={m} className="quiz-body-tag">
                      {m}
                    </span>
                  ))
                ) : (
                  <span className="quiz-body-tag quiz-body-tag-empty">
                    No muscles selected
                  </span>
                )}
              </div>
            </div>
          </div>

          {isLoading && (
            <div className="quiz-loading mt-3">
              <div className="quiz-loading-bar">
                <div className="quiz-loading-bar-fill" />
              </div>
              <div className="quiz-loading-text">Generating your plan...</div>
              <ul className="quiz-loading-steps">
                <li>Analyzing your goal</li>
                <li>Matching experience and equipment</li>
                <li>Building weekly split and sessions</li>
              </ul>
            </div>
          )}

          {error && (
            <div className="quiz-plan-banner quiz-plan-error mt-3">
              {error}
            </div>
          )}

          {planText && !isLoading && (
            <div className="quiz-plan-banner mt-3">
              <div className="quiz-plan-title">Your generated plan</div>
              <div className="quiz-plan-content">
                {planText
                  .split('\n')
                  .filter((line) => line.trim().length > 0)
                  .map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
              </div>
            </div>
          )}

          <div className="d-flex justify-content-between mt-4">
            <button
              type="button"
              className="btn quiz-btn-back"
              onClick={onBack}
              disabled={isLoading}
            >
              Back
            </button>
            <button
              type="button"
              className="btn quiz-btn-next"
              onClick={handleGenerate}
              disabled={isLoading}
            >
              {isLoading ? 'Generating...' : 'Generate plan'}
            </button>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default ReviewStep;
