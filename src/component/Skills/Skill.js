// @ts-nocheck
import './Skill.scss'

import { FaJava, FaJsSquare, FaNodeJs, FaReact, FaAws } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Animated from '../AnimatedLayers/Animated'
import {
  DiSwift,
  DiMongodb,
  DiPostgresql,
  DiGit,
  DiDocker,
  DiPython,
} from 'react-icons/di'

import { SiTypescript, SiExpress } from 'react-icons/si'
import firebaseCustomLogo from '../../assets/images/firebase-logo.png'

const Skill = () => {
  const skills = [
    { name: 'Swift', icon: DiSwift, color: '#FA7343', type: 'icon' },
    { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E', type: 'icon' },
    { name: 'TypeScript', icon: SiTypescript, color: '#007ACC', type: 'icon' },
    { name: 'Java', icon: FaJava, color: '#ED8B00', type: 'icon' },
    { name: 'Python', icon: DiPython, color: '#3776AB', type: 'icon' },
    { name: 'React / React Native', icon: FaReact, color: '#5ED4F4', type: 'icon' },
    { name: 'Node.js', icon: FaNodeJs, color: '#68A063', type: 'icon' },
    { name: 'Express.js', icon: SiExpress, color: '#000000', type: 'icon' },
    { name: 'MongoDB', icon: DiMongodb, color: '#47A248', type: 'icon' },
    { name: 'PostgreSQL', icon: DiPostgresql, color: '#336791', type: 'icon' },
    { name: 'AWS', icon: FaAws, color: '#FF9900', type: 'icon' },
    { name: 'Firebase', icon: firebaseCustomLogo, type: 'image' },
    { name: 'Git', icon: DiGit, color: '#EC4D28', type: 'icon' },
    { name: 'Docker', icon: DiDocker, color: '#2496ED', type: 'icon' },
  ]

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="container skill-container">
      <div className="text-zone">
        <h1>
          <Animated
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            index={15}
          />
        </h1>
      </div>

      <div className="skills-grid">
        {skills.map(({ name, icon: IconOrSrc, color, type }, i) => (
          <div key={i} className="skill-item">
            {type === 'icon' ? (
              <IconOrSrc className="skill-icon" size={60} color={color} />
            ) : (
              <img
                src={IconOrSrc}
                alt={name}
                className="skill-icon"
                style={{ width: 50, height: 60 }}
              />
            )}
            <p className="icon-font">{name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill
