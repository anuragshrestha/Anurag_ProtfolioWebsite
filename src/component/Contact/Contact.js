import Loader from 'react-loaders'
import './Contact.scss'
import Animated from '../AnimatedLayers/Animated'
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_dvke4al', 'template_fkfwn9y', refForm.current, 'vIUZN6pg9vnvlbJ_0')
      .then(
        () => {
          alert('Message sent successfully.')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send message. Please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <Animated
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '\u00A0', 'm', 'e']}
              index={15}
            />
          </h1>
          <p>
            I am interested in Software Engineering roles focusing mainly on Mobile App development and Backend development.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input type="email" name="email" placeholder="Email" required />
                </li>
                <li>
                  <input type="text" name="subject" placeholder="Subject" required />
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required />
                </li>
                <li>
                  <input className="flat-button" type="submit" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          Anurag Shrestha
          <br />
          301 Harvard DR SE, United States
          <br />
          <span>anuragshrestha448@gmail.com</span>
        </div>

        <div className="map-wrap">
          <MapContainer center={[35.07703, -106.62114]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[35.07703, -106.62114]} />
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact