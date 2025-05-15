// Navbar.js
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <Link className="right" to="/about">About</Link>
      <Link className="right" to="/projects">Projects</Link>
      <Link className="right" to="/">Home</Link>

      <a className="left" href="https://www.linkedin.com/in/kevin-huang-002149231" target="_blank" rel="noopener noreferrer">
        <img className="icon" src="/linkedin.png" height="42px" alt="LinkedIn" />
      </a>

      <a className="left" href="mailto:kevin.3.huang@uconn.edu" target="_blank" rel="noopener noreferrer">
        <img className="icon" src="/mail.png" height="42px" alt="Email" />
      </a>

      <a className="left" href="https://github.com/PsYchiiC8" target="_blank" rel="noopener noreferrer">
        <img className="icon" src="/github.png" height="42px" alt="GitHub" />
      </a>
    </nav>
  );
}
