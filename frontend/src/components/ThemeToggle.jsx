import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="outline-secondary" 
      className="theme-toggle" 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <FaSun size="1.2em" />
      ) : (
        <FaMoon size="1.2em" />
      )}
    </Button>
  );
}

export default ThemeToggle;

