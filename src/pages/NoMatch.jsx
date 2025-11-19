import { Link } from "react-router";
import '../App.css';

function NoMatch() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">404</h1>
                <p className="page-subtitle">Page not found</p>
            </div>
            <div className="page-card">
                <div className="page-content">
                    <p>Uh oh, looks like you're lost!</p>
                    <p>
                        <Link to="/" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>
                            Return to Home
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NoMatch;
