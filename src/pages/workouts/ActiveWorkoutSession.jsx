import { useState, useEffect } from 'react';
import { Modal, Button, Badge, Form, Dropdown } from 'react-bootstrap';
import { FaPlay, FaPause, FaStop, FaCheckCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { MdRadioButtonUnchecked } from 'react-icons/md';
const parsePlan = (planText) => {
    if (!planText) return null;

    let textToParse = planText;
    const startMarker = "WORKOUTS BY DAY:";
    const startIndex = textToParse.toUpperCase().indexOf(startMarker);
    if (startIndex !== -1) {
        textToParse = textToParse.substring(startIndex + startMarker.length);
    }
    const endMarkers = ["BODY FOCUS NOTES:", "SAFETY AND PROGRESSION:", "NOTES:"];
    let bestEndIndex = textToParse.length;

    endMarkers.forEach(marker => {
        const idx = textToParse.toUpperCase().indexOf(marker);
        if (idx !== -1 && idx < bestEndIndex) {
            bestEndIndex = idx;
        }
    });

    textToParse = textToParse.substring(0, bestEndIndex);


    const lines = textToParse.split('\n').map(l => l.trim()).filter(l => l);
    const days = [];
    let currentDay = null;

    lines.forEach(line => {
        if (/^Day\s+\d+/i.test(line)) {
            if (currentDay) {
                days.push(currentDay);
            }
            currentDay = { title: line, exercises: [] };
        } else if (currentDay) {
            currentDay.exercises.push(line);
        }
    });
    if (currentDay) {
        days.push(currentDay);
    }

    const validDays = days.filter(d => d.exercises.length > 0);

    if (validDays.length === 0) {
        const fallbackLines = planText.split('\n').map(l => l.trim()).filter(l => l);
        return [{ title: 'Full Workout', exercises: fallbackLines }];
    }

    return validDays;
};

function ActiveWorkoutSession({ workout, onClose }) {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [completedItems, setCompletedItems] = useState(new Set());

    const [parsedDays, setParsedDays] = useState([]);
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [showFullPlan, setShowFullPlan] = useState(false);

    useEffect(() => {
        if (workout?.plan) {
            const days = parsePlan(workout.plan);
            setParsedDays(days);
        }
    }, [workout]);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(s => s + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const formatTime = (totalSeconds) => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        if (h > 0) {
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    const toggleTimer = () => setIsActive(!isActive);
    const handleFinish = () => onClose();

    const toggleItem = (index) => {
        const next = new Set(completedItems);
        if (next.has(index)) {
            next.delete(index);
        } else {
            next.add(index);
        }
        setCompletedItems(next);
    };

    const currentList = workout?.plan && parsedDays.length > 0
        ? parsedDays[selectedDayIndex].exercises
        : (workout.exercisesList || (Array.isArray(workout.exercises) ? workout.exercises : []));

    const currentDayTitle = workout?.plan && parsedDays.length > 0
        ? parsedDays[selectedDayIndex].title
        : 'Workout Routine';

    return (
        <>
            <Modal
                show={true}
                fullscreen={true}
                onHide={onClose}
                className="active-workout-modal"
                style={{ zIndex: 1060 }}
            >
                <Modal.Header style={{ background: 'var(--color-background)', borderBottomColor: 'var(--color-border-default)' }}>
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <div>
                            <div className="d-flex align-items-center gap-2 mb-2">
                                <Badge bg="primary">ACTIVE SESSION</Badge>
                                {workout?.plan && (
                                    <Button
                                        variant="link"
                                        className="p-0 text-decoration-none d-flex align-items-center gap-1"
                                        style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}
                                        onClick={() => setShowFullPlan(true)}
                                    >
                                        <FaInfoCircle /> View Full Plan
                                    </Button>
                                )}
                            </div>
                            <Modal.Title style={{ color: 'var(--color-text-primary)' }}>{workout?.name || 'Workout'}</Modal.Title>
                        </div>
                        <Button
                            variant="link"
                            className="p-0"
                            onClick={onClose}
                            aria-label="Close"
                            style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}
                        >
                            <FaTimes />
                        </Button>
                    </div>
                </Modal.Header>
                <Modal.Body style={{ background: 'var(--color-background)', color: 'var(--color-text-primary)', overflow: 'hidden' }}>
                    <div className="d-flex flex-column align-items-center h-100">

                        <div className="mt-4 mb-4 text-center flex-shrink-0">
                            <div style={{ fontSize: '6rem', fontWeight: 'bold' }}>
                                {formatTime(seconds)}
                            </div>
                            <div style={{ color: 'var(--color-text-secondary)' }}>Duration</div>
                        </div>

                        <div className="d-flex gap-4 mb-4 flex-shrink-0">
                            <Button
                                variant={isActive ? "outline-warning" : "success"}
                                size="lg"
                                className="rounded-circle d-flex align-items-center justify-content-center border-0 shadow-lg"
                                style={{ width: '80px', height: '80px', transition: 'all 0.2s' }}
                                onClick={toggleTimer}
                            >
                                {isActive ? <FaPause size={28} /> : <FaPlay size={28} className="ms-1" />}
                            </Button>
                            <Button
                                variant="danger"
                                size="lg"
                                className="rounded-circle d-flex align-items-center justify-content-center border-0 shadow-lg"
                                style={{ width: '80px', height: '80px', transition: 'all 0.2s' }}
                                onClick={handleFinish}
                            >
                                <FaStop size={28} />
                            </Button>
                        </div>

                        <div className="w-100 flex-grow-1 d-flex flex-column" style={{ maxWidth: '800px', minHeight: 0 }}>
                            <div className="d-flex justify-content-between align-items-center mb-3 flex-shrink-0 px-2">
                                {parsedDays.length > 1 ? (
                                    <Dropdown>
                                        <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" size="sm">
                                            {currentDayTitle}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ maxHeight: '300px', overflowY: 'auto' }}>
                                            {parsedDays.map((day, idx) => (
                                                <Dropdown.Item
                                                    key={idx}
                                                    active={idx === selectedDayIndex}
                                                    onClick={() => {
                                                        setSelectedDayIndex(idx);
                                                        setCompletedItems(new Set());
                                                    }}
                                                >
                                                    {day.title}
                                                </Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                ) : (
                                    <h5 className="mb-0" style={{ color: 'var(--color-text-secondary)' }}>Session Plan</h5>
                                )}
                                <span style={{ color: 'var(--color-text-secondary)'}}>{completedItems.size} completed</span>
                            </div>

                            <div className="p-4 rounded-4 flex-grow-1 custom-scrollbar" style={{ background: 'var(--color-background-tertiary)', overflowY: 'auto' }}>
                                {currentList.map((line, i) => {
                                    const isDone = completedItems.has(i);
                                    return (
                                        <div
                                            key={i}
                                            onClick={() => toggleItem(i)}
                                            className="d-flex align-items-start gap-3 mb-3 pb-3 border-bottom border-secondary-subtle"
                                            style={{
                                                cursor: 'pointer',
                                                transition: 'all 0.2s',
                                                opacity: isDone ? 0.5 : 1
                                            }}
                                        >
                                            <div className="mt-1 flex-shrink-0" style={{ color: isDone ? 'var(--color-primary)' : 'var(--color-text-tertiary)' }}>
                                                {isDone ? <FaCheckCircle size={22} /> : <MdRadioButtonUnchecked size={22} />}
                                            </div>
                                            <div style={{
                                                fontSize: '1.1rem',
                                                textDecoration: isDone ? 'line-through' : 'none',
                                                color: isDone ? 'var(--color-text-secondary)' : 'var(--color-text-primary)'
                                            }}>
                                                {line}
                                            </div>
                                        </div>
                                    );
                                })}

                                {currentList.length === 0 && (
                                    <p className="text-center mb-0 mt-3 text-muted">
                                        {workout?.exercises || 0} exercises in this circuit.
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={showFullPlan} onHide={() => setShowFullPlan(false)} size="lg" centered scrollable style={{ zIndex: 1070 }}>
                <Modal.Header closeButton>
                    <Modal.Title>Full Workout Details</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ whiteSpace: 'pre-wrap' }}>
                    {workout?.plan || 'No detailed plan available.'}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowFullPlan(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ActiveWorkoutSession;
