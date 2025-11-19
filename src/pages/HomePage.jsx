import '../App.css';
import { CgGym } from 'react-icons/cg';
import { FaFire, FaUtensils, FaClock } from 'react-icons/fa';

function HomePage() {

  const recommendedWorkouts = [
    {
      id: 1,
      name: 'Full Body Strength',
      duration: '45 min',
      difficulty: 'Intermediate',
      exercises: ['Squats', 'Push-ups', 'Deadlifts', 'Pull-ups'],
      calories: 350,
    },
    {
      id: 2,
      name: 'Cardio Blast',
      duration: '30 min',
      difficulty: 'Beginner',
      exercises: ['Running', 'Jumping Jacks', 'Burpees', 'Mountain Climbers'],
      calories: 280,
    },
    {
      id: 3,
      name: 'Upper Body Focus',
      duration: '40 min',
      difficulty: 'Advanced',
      exercises: ['Bench Press', 'Rows', 'Shoulder Press', 'Bicep Curls'],
      calories: 320,
    },
  ];

  const foodPlans = [
    {
      id: 1,
      name: 'High Protein Plan',
      meals: 5,
      calories: 2200,
      focus: 'Muscle Building',
    },
    {
      id: 2,
      name: 'Weight Loss Plan',
      meals: 4,
      calories: 1600,
      focus: 'Fat Loss',
    },
    {
      id: 3,
      name: 'Balanced Nutrition',
      meals: 5,
      calories: 2000,
      focus: 'Maintenance',
    },
  ];

  return (
    <div className="page-container">
      <div className="homepage-hero">
        <CgGym size="6em" className="homepage-icon" />
        <h1 className="homepage-title">Personal Training</h1>
        <p className="homepage-subtitle">
          Transform your body, elevate your mind, achieve your goals
        </p>
      </div>

      {/* Recommended Workouts */}
      <section className="homepage-section">
        <div className="section-header">
          <h2 className="section-title">
            <FaFire style={{ marginRight: '0.5rem' }} />
            Recommended Workouts
          </h2>
        </div>
        <div className="workout-grid">
          {recommendedWorkouts.map((workout) => (
            <div key={workout.id} className="workout-card recommended">
              <div className="workout-card-header">
                <h4>{workout.name}</h4>
                <span className="recommended-badge">Recommended</span>
              </div>
              <div className="workout-card-body">
                <div className="workout-info">
                  <FaClock /> {workout.duration}
                </div>
                <div className="workout-info">
                  <FaFire /> {workout.calories} cal
                </div>
                <div className="workout-difficulty">{workout.difficulty}</div>
                <div className="workout-exercises">
                  <strong>Exercises:</strong>
                  <ul>
                    {workout.exercises.map((exercise, idx) => (
                      <li key={idx}>{exercise}</li>
                    ))}
                  </ul>
                </div>
                <button className="workout-button">Start Workout</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Food Plans */}
      <section className="homepage-section">
        <div className="section-header">
          <h2 className="section-title">
            <FaUtensils style={{ marginRight: '0.5rem' }} />
            Nutrition Plans
          </h2>
        </div>
        <div className="food-plan-grid">
          {foodPlans.map((plan) => (
            <div key={plan.id} className="food-plan-card">
              <div className="food-plan-header">
                <h4>{plan.name}</h4>
                <span className="food-plan-focus">{plan.focus}</span>
              </div>
              <div className="food-plan-body">
                <div className="food-plan-info">
                  <div>
                    <strong>{plan.meals}</strong>
                    <span>Meals/Day</span>
                  </div>
                  <div>
                    <strong>{plan.calories}</strong>
                    <span>Calories</span>
                  </div>
                </div>
                <button className="food-plan-button">View Plan</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
