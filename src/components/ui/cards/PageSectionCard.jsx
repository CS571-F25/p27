import { Card } from 'react-bootstrap';

function PageSectionCard({ title, children, className = "", noHeader = false }) {
    return (
        <Card className={`page-card border-0 mb-4 ${className}`} style={{ background: 'var(--color-card-background)', padding: '2rem' }}>
            {!noHeader && (
                <Card.Header className="bg-transparent border-0 p-0 mb-3">
                    <Card.Title as="h2" style={{ color: 'var(--color-text-primary)' }}>{title}</Card.Title>
                </Card.Header>
            )}
            <Card.Body className="p-0">
                {children}
            </Card.Body>
        </Card>
    );
}

export default PageSectionCard;
