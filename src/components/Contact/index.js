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

        emailjs
        .sendForm(
            'gmail',
            'template_jq1913v',
            refForm.current,
            '0uMcKXFgMoebsEZsN'
        )

        .then (
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)

            },
            () => {
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
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
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
                    India,
                    <br />
                    Kodiyan Mohalla <br />
                    Bharatpur Rajasthan <br />
                    <span>soumaykhandelwal@gmail.com</span>

                </div>

                <div className='map-wrap'>
                    <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[44.96366, 19.61045]}>
                        <Popup>Soumay lives here, come over for a cup of coffee </Popup>

                    </Marker>
                    
                    </MapContainer>
                </div>


            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact