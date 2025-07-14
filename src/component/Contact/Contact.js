import { useState, useRef, useEffect } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import Animated from '../AnimatedLayers/Animated';
import './Contact.scss';

const SERVICE_ID   = 'service_dvke4al';    // ✏️  your Service ID
const TEMPLATE_ID  = 'template_contact';   // ✏️  TO-YOU template
const PUBLIC_KEY   = 'vIUZN6pg9vnvlbJ_0';  // ✏️  your Public key

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const id = setTimeout(() => setLetterClass('text-animate-hover'), 3000);
    return () => clearTimeout(id);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert('Message sent! Check your inbox for our auto-reply.');
        formRef.current.reset();
      })
      .catch(() => alert('Failed to send message. Please try again.'))
      .finally(() => setSending(false));
  };

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
          I’m open to iOS / Full-Stack roles. Send a note and I’ll reply soon!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="contact-form">
          <input name="name"    type="text"   placeholder="Name"    required />
          <input name="email"   type="email"  placeholder="Email"   required />
          <input name="subject" type="text"   placeholder="Subject" required />
          <textarea name="message" placeholder="Message" required />
          <button className="flat-button" disabled={sending}>
            {sending ? 'Sending…' : 'Send'}
          </button>
        </form>
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
  );
}