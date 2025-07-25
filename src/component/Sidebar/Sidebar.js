import './Sidebar.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faCode,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/about"
          end
          className={({ isActive }) => `about-link${isActive ? ' active' : ''}`}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/skill"
          end
          className={({ isActive }) => `skill-link${isActive ? ' active' : ''}`}
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink
          to="/contact"
          end
          className={({ isActive }) =>
            `contact-link${isActive ? ' active' : ''}`
          }
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className="close-icon"
        />
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/anuragshrestha19/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#FFFFFF"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/anuragshrestha"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/_anurag_shrestha_?igsh=bzVyNTRsdDNwenhn&utm_source=qr"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="anchor-icon instagram-icon"
            />
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
