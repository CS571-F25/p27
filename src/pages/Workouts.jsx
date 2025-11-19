import '../App.css';

function Workouts() {
    return (
        <div className="page-container" style={{ color: 'var(--color-text-primary)' }}>
            <div className="page-header">
                <h1 className="page-title">Workouts</h1>
                <p className="page-subtitle">Track and manage your training sessions</p>
            </div>
            <div className="page-card">
                <div className="page-content">
                    <p>Your workout tracking features will be available here.</p>
                    <p>Log exercises, sets, reps, and track your progress over time.</p>
                </div>
            </div>
        </div>
    );
}

export default Workouts;

