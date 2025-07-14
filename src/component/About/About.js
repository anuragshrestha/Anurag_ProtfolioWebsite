import './About.scss'
import Animated from '../AnimatedLayers/Animated'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SiPostgresql } from 'react-icons/si'
import {
  faAws,
  faGitAlt,
  faJsSquare,
  faReact,
  faSwift,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <Animated
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', '\u00A0', 'm', 'e']}
            index={15}
          />
        </h1>
        <p>
          I am a rising Senior Computer Science Student at UNM. I am passionate
          about Mobile App developments and Backend Engineering. I spend most of
          my time developing Full stack Mobile apps and doing Leetcodes.
        </p>
        <p>
          I like to read books and go on hikes and long drive during weekends.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faSwift} color="#FA7343" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#F7DF1E" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faAws} color="#FF9900" />
          </div>
          <div className="face6">
               <SiPostgresql color="#336791" size={100} />
         
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
