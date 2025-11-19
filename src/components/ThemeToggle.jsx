import { useTheme } from '../contexts/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';
import './ThemeToggle.css';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? (
        <FaSun size="1.2em" />
      ) : (
        <FaMoon size="1.2em" />
      )}
    </button>
  );
}

export default ThemeToggle;

