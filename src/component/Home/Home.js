import './Home.scss';
import anurag from '../../assets/images/anurag.png'
import {Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Animated from '../AnimatedLayers/Animated';
import Image from './Image/Image'


const Home = () => {

   const [letterClass, setLetterClass] = useState('text-animate')
   const nameArray = ['A', 'n', 'u', 'r', 'a', 'g ', '\u00A0', 'S', 'h', 'r', 'e', 's', 't', 'h', 'a'];




    useEffect(() => {
      const timeOut = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000);

      return () => clearTimeout(timeOut);

    })

     return(
        <div className='container home-page'>
            <div className='text-zone'>
              <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/> 
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>{' '}
              <Animated letterClass={letterClass} strArray={nameArray} index={15} />
              </h1>
              <h2>Software Engineer / iOS Engineer / Backend Engineer</h2>
              <Link to='/contact' className="flat-button">CONTACT ME</Link>
            </div>
        <Image/>
        </div>
    )

}
  


export default Home