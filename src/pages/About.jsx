import '../App.css';

function About() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">About</h1>
                <p className="page-subtitle">Learn more about our personal training platform</p>
            </div>
            <div className="page-card">
                <div className="page-content">
                    <p>
                        Welcome to Personal Training, your comprehensive fitness companion designed to help you
                        achieve your training goals.
                    </p>
                    <p>
                        Our platform provides tools to track workouts, monitor progress, and maintain a personalized
                        fitness profile. Whether you're a beginner or an experienced athlete, we're here to support
                        your fitness journey.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;

