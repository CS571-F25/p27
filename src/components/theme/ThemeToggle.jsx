import { useTheme } from '../../contexts/ThemeContext';
import { FaMoon, FaSun, FaDesktop } from 'react-icons/fa';
import { Button, ButtonGroup } from 'react-bootstrap';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ButtonGroup className="theme-toggle-group">
      <Button
        variant={theme === 'light' ? 'primary' : 'outline-secondary'}
        onClick={() => setTheme('light')}
        aria-label="Set Light Theme"
        title="Light Mode"
      >
        <FaSun />
      </Button>
      <Button
        variant={theme === 'dark' ? 'primary' : 'outline-secondary'}
        onClick={() => setTheme('dark')}
        aria-label="Set Dark Theme"
        title="Dark Mode"
      >
        <FaMoon />
      </Button>
      <Button
        variant={theme === 'system' ? 'primary' : 'outline-secondary'}
        onClick={() => setTheme('system')}
        aria-label="Set System Theme"
        title="System Preference"
      >
        <FaDesktop />
      </Button>
    </ButtonGroup>
  );
}

export default ThemeToggle;
