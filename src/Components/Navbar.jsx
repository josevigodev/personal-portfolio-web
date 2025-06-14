import '../styles/Navbar.css';
import { AboutIcon, HomeIcon, ProjectsIcon } from './Icons';

export function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-links'>
        <li>
          <a href='#home'>
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href='#about'>
            <AboutIcon />
          </a>
        </li>
        <li>
          <a href='#projects'>
            <ProjectsIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
