import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);

        return () => clearTimeout(timeoutId); 
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        // Updated EmailJS configuration - you'll need to replace these with your actual values
        emailjs
        .sendForm(
            'service_0au17df', // Replace with your EmailJS service ID
            'template_chcabea', // Replace with your EmailJS template ID
            refForm.current,
            'yCf_lbUlkCb1Snx69' // Replace with your EmailJS public key
        )
        .then (
            (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message successfully sent!')
                refForm.current.reset() // Reset form instead of reloading page
            },
            (error) => {
                console.log('FAILED...', error);
                alert('Failed to send the message, please try again')
            }
        )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in software development opportunities - especially 
                        full-stack development and AI-powered applications. As a Computer Science 
                        student with hands-on experience in Java, Spring Boot, React.js, and 
                        modern web technologies, I'm always excited to work on challenging projects. 
                        Don't hesitate to contact me using the form below.
                    </p>

                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="title" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required />
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='info-map'>
                    Soumay Khandelwal,
                    <br />
                    Bharatpur, Rajasthan
                    <br />
                    India <br />
                    <span>soumaykhandelwal@gmail.com</span>
                    <span>+91 89051 19525</span>
                </div>

                <div className='map-wrap'>
                    {/* Updated coordinates for Bharatpur, Rajasthan */}
                    <MapContainer center={[27.2152, 77.4895]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[27.2152, 77.4895]}>
                            <Popup>Soumay lives here, come over for a cup of coffee!</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact