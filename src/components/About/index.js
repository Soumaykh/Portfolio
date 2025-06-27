import { useEffect, useState } from 'react'
import {
  faJava,
  faReact,
  faNodeJs,
  faGitAlt,
  faJs,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleResumeDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/assets/Soumay_Khandelwal_Resume.pdf'; // Put your resume in public/assets/
    link.download = 'Soumay_Khandelwal_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an aspiring CSE student with strong skills in Java, Spring Boot, 
            and modern web technologies. Currently pursuing B.Tech in Computer Science 
            at VIT with a CGPA of 8.57, I'm passionate about building efficient, 
            scalable software solutions.
          </p>
          <p align="LEFT">
            I'm naturally curious and perpetually working on improving my skills 
            through hands-on projects. From developing AI-powered applications like 
            Imagify to working with enterprise technologies during my internship at 
            CGTMSE, I love tackling challenging problems.
          </p>
          <p>
            My expertise spans full-stack development with React.js, Node.js, 
            Spring Boot, and database technologies. I'm also experienced in 
            data analysis tools and cloud platforms, always eager to learn 
            and implement cutting-edge technologies.
          </p>

          <button className="flat-button resume-download" onClick={handleResumeDownload}>
            Download Resume
          </button>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#f89820" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faPython} color="#3776ab" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About