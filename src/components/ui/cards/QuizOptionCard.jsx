import { Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

function QuizOptionCard({
    selected,
    onClick,
    children,
    className = "",
    showCheckbox = false
}) {
    // Dynamic styles based on state, using CSS variables
    const getBorderColor = () => selected ? 'var(--color-primary)' : 'var(--color-border-default)';
    const getBackgroundColor = () => selected ? 'var(--color-background-tertiary)' : 'var(--color-card-background)';

    return (
        <Card
            className={`quiz-option-card h-100 ${className}`}
            onClick={onClick}
            style={{
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                borderColor: getBorderColor(),
                backgroundColor: getBackgroundColor(),
                borderWidth: '2px'
            }}
            onMouseEnter={(e) => {
                if (!selected) {
                    e.currentTarget.style.borderColor = 'var(--color-border-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                }
            }}
            onMouseLeave={(e) => {
                if (!selected) {
                    e.currentTarget.style.borderColor = 'var(--color-border-default)';
                    e.currentTarget.style.transform = 'translateY(0)';
                }
            }}
        >
            <Card.Body className="d-flex align-items-center justify-content-between p-3">
                <div className="d-flex align-items-center gap-2 w-100">
                    {showCheckbox && (
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '4px',
                                border: `2px solid ${selected ? 'var(--color-primary)' : 'var(--color-text-tertiary)'}`,
                                background: selected ? 'var(--color-primary)' : 'transparent',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '0.8rem'
                            }}
                        >
                            {selected && <FaCheckCircle />}
                        </div>
                    )}
                    <span style={{ fontWeight: 500, color: selected ? 'var(--color-primary)' : 'var(--color-text-secondary)' }}>
                        {children}
                    </span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default QuizOptionCard;
