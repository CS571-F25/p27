import { Link } from "react-router";
import '../../App.css';
import { Container, Card, Alert, Button } from 'react-bootstrap';

function NoMatch() {
    return (
        <Container className="page-container">
            <div className="page-header">
                <h1 className="page-title">404</h1>
                <p className="page-subtitle">Page not found</p>
            </div>
            <Card className="page-card">
                <Card.Body className="page-content">
                    <Alert variant="warning" className="mb-4">
                        <Alert.Heading>Uh oh, looks like you're lost!</Alert.Heading>
                        <p>The page you're looking for doesn't exist.</p>
                    </Alert>
                    <Button as={Link} to="/" variant="primary">
                        Return to Home
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default NoMatch;
