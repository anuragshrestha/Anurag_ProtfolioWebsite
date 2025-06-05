import './About.scss';
import Animated from '../AnimatedLayers/Animated';
import { useEffect, useState } from 'react';


const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
     
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeoutId); 
    }, []);
  
    return (
       <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <Animated letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', '\u00A0', 'm', 'e']} index={15} />
          </h1>
          <p>
            I am a rising Senior Computer Science Student at UNM. I am passionate about Mobile App developments and Backend Engineering.
            I spend most of my time developing Full stack Mobile apps and doing Leetcodes. 
          </p>
            <p>
            I like to read books and go on hikes and long drive during weekends. 
          </p>
        </div>
       </div>
    )
}

export default About;