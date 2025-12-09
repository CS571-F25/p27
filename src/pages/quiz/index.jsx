import '../../App.css';
import './styles.css';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import GoalStep from './steps/Goal';
import ExperienceStep from './steps/Experience';
import EquipmentStep from './steps/Equipment';
import ScheduleStep from './steps/Schedule';
import BodyStep from './steps/Body';
import ReviewStep from './steps/Review';

const steps = ['goal', 'experience', 'equipment', 'schedule', 'body', 'review'];

const initialAnswers = {
  goal: '',
  experience: '',
  equipment: [],
  daysPerWeek: 3,
  sessionLength: 45,
  focusMuscles: []
};

function QuizHome() {
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);

  function updateAnswers(partial) {
    setAnswers((prev) => ({ ...prev, ...partial }));
  }

  function next() {
    setStepIndex((prev) => Math.min(prev + 1, steps.length - 1));
  }

  function back() {
    setStepIndex((prev) => Math.max(prev - 1, 0));
  }

  const currentStep = steps[stepIndex];

  function renderStep() {
    if (currentStep === 'goal') {
      return (
        <GoalStep
          value={answers.goal}
          stepIndex={stepIndex}
          totalSteps={steps.length}
          onChange={(goal) => updateAnswers({ goal })}
          onNext={next}
        />
      );
    }
    if (currentStep === 'experience') {
      return (
        <ExperienceStep
          value={answers.experience}
          stepIndex={stepIndex}
          totalSteps={steps.length}
          onChange={(experience) => updateAnswers({ experience })}
          onNext={next}
          onBack={back}
        />
      );
    }
    if (currentStep === 'equipment') {
      return (
        <EquipmentStep
          value={answers.equipment}
          stepIndex={stepIndex}
          totalSteps={steps.length}
          onChange={(equipment) => updateAnswers({ equipment })}
          onNext={next}
          onBack={back}
        />
      );
    }
    if (currentStep === 'schedule') {
      return (
        <ScheduleStep
          daysPerWeek={answers.daysPerWeek}
          sessionLength={answers.sessionLength}
          stepIndex={stepIndex}
          totalSteps={steps.length}
          onChange={(partial) => updateAnswers(partial)}
          onNext={next}
          onBack={back}
        />
      );
    }
    if (currentStep === 'body') {
      return (
        <BodyStep
          value={answers.focusMuscles}
          stepIndex={stepIndex}
          totalSteps={steps.length}
          onChange={(focusMuscles) => updateAnswers({ focusMuscles })}
          onNext={next}
          onBack={back}
        />
      );
    }
    if (currentStep === 'review') {
      return (
        <ReviewStep
          answers={answers}
          stepIndex={stepIndex}
          totalSteps={steps.length}
          onBack={back}
        />
      );
    }
    return null;
  }

  return (
    <Container className="page-container quiz-page">
      {renderStep()}
    </Container>
  );
}

export default QuizHome;
