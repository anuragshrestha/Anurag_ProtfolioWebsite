import { useState, useRef, useEffect } from 'react'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import Animated from '../AnimatedLayers/Animated'
import './Contact.scss'


const SERVICE_ID = 'service_dvke4al' 
const TEMPLATE_ID = 'template_fkfwn9y' 
const PUBLIC_KEY = 'vIUZN6pg9vnvlbJ_0' 


export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [sending, setSending] = useState(false)
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef(null)

  useEffect(() => {
    const id = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
    return () => clearTimeout(id)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)

    const form = formRef.current;
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form , PUBLIC_KEY)
      .then(() => {
        setIsSent(true);
        formRef.current.reset();
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch(() => alert('Failed to send message. Please try again.'))
      .finally(() => setSending(false))
  }

  return (
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
          I am interested in Software Engineering roles focusing mainly on
          Mobile App development and Backend development.
        </p>
        <div className="contact-form">
          <form ref={formRef} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="Email" required />
              </li>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </li>
              <li>
                <textarea placeholder="Message" name="message" required />
              </li>
              <li>
                {/* <input className="flat-button" type="submit" value="Send" /> */}
                <button className="flat-button" disabled={sending}>
                  {sending ? 'Sending…' : 'Send'}
                </button>
              </li>
            </ul>
            {isSent && <p className="success-message">Message sent! Please check your inbox.</p>}
          </form>
        </div>
      </div>
      <div className="info-map">
        Anurag Shrestha<br />
        301 Harvard Dr SE<br />
        Albuquerque, NM<br />
        <span>anuragshrestha448@gmail.com</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[35.07703, -106.62114]} zoom={13}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[35.07703, -106.62114]} />
        </MapContainer>
      </div>
    </div>
  )
}
