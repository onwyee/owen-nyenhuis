import { useState } from 'react'
import React, {useRef} from 'react'
import './App.css'
import { TypeAnimation } from 'react-type-animation';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [isChecked, setIsChecked] = useState(false);
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};
  return (
    <>
        <div className={`app-container ${isChecked ? "dark-mode" : ""}`}>
        <div className="menu-bar" aria-label="Menu">
            <div className="filled"></div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fill="currentColor"
                className="bi bi-menu-bar"
                viewBox="0 0 16 16"
                
            >
                  <path fill-rule="evenodd" d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <div className='dropdown'>
                <div className="nav-item" onClick={() => scrollToSection(aboutRef)}>About</div>
                <div className="nav-item" onClick={() => scrollToSection(projectsRef)}>Projects</div>
                <div className="nav-item" onClick={() => scrollToSection(contactRef)}>Contact</div>
                <div className="nav-item" onClick={() => window.open("/OwenNyenhuisResume.pdf", "_blank")}>Resume</div>
            </div>
            </div>
            <label className="switch">
                <input
                type="checkbox"
                className="chk"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                />
                <span className="slider"></span>
            </label>
        
       
      <TypeAnimation ref={aboutRef} className='greeting' sequence={['',2000,'Owen Nyenhuis',2000,'Owen Nyenhuis, Software Developer',2000,'Owen Nyenhuis, Graphic Designer',2000,'Owen Nyenhuis, Web Developer',5000]} wrapper="span" speed={50} style={{fontSize: '4em'}} repeat={Infinity} ></TypeAnimation>
      <div ref={projectsRef} className="projects">
      <TypeAnimation sequence={['',2000,'Projects',10000]} wrapper="span" speed={50} style={{fontSize: '2em'}} repeat={Infinity} ></TypeAnimation>
      <div className="project-panes">
                    <div className="project-pane" onClick={() => window.location.href="https://calc-web-nine.vercel.app/"}>
                        <div className="project-title">
                            Calculator
                        </div>
                        <div className="project-description">
                            HTML, CSS, JavaScript, No math libraries were used
                        </div>
                        
                    </div>
                    <div className="project-pane" onClick={() => window.location.href="https://piano-two-rosy.vercel.app/piano.html"}>
                        <div className="project-title">
                            Piano
                        </div>
                        <div className="project-description">
                            HTML, CSS, JavaScript
                        </div>
                    </div>
                    <div className="project-pane" onClick={() => window.location.href="https://exam-wejkmadutq-uc.a.run.app/login"}>
                        <div className="project-title">
                            Trello
                        </div>
                        <div className="project-description">
                            HTML, CSS, JavaScript, SocketIO, SQL
                        </div>
                    </div>
                    <div className="project-pane">
                        <div className="project-title">
                            Calendar
                        </div>
                        <div className="project-description">
                            HTML, Tailwind CSS, TypeScript, React, Date-fns library
                        </div>
                           
                        
                    </div>
                    <div className="project-pane" onClick={() => window.location.href="https://mwnyenhuis-djdlik6f2a-uc.a.run.app/art"}>
                        <div className="project-title">
                            Art Portfolio
                        </div>
                        <div className="project-description">
                            HTML, CSS, JavaScript
                        </div>
                    </div>
                    <div className="project-pane">
                        <div className="project-title">
                            Meridio - Work In Progress
                        </div>
                        <div className="project-description">
                            This is the current project I'm working on, a mock of Twitter/X
                        </div>
                    </div>
                  </div>
                  </div>
      <div ref={contactRef} className="contact">
        <TypeAnimation ref={contactRef} className='contact' sequence={['',2000,'Contact',10000]} wrapper="span" speed={50} style={{fontSize: '2em'}} repeat={Infinity} ></TypeAnimation>
        <div className="blurb">I’m open to both freelance opportunities and full-time roles, 
            especially those involving ambitious projects that require precision and attention to detail. 
            If you’re looking for a dedicated problem-solver with a passion for complex challenges, 
            feel free to reach out via the email link below.</div>
            
            <ul className="example-2">
            <li className="icon-content">
                <a
                href="https://www.linkedin.com/in/owen-nyenhuis-8023292b6/"
                aria-label="LinkedIn"
                data-social="linkedin"
                >
                <div className="filled"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                    
                >
                    <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                    fill="currentColor"
                    ></path>
                </svg>
                </a>
                <div className="tooltip">LinkedIn</div>
            </li>
            <li className="icon-content">
                <a href="https://github.com/onwyee" aria-label="GitHub" data-social="github">
                <div className="filled"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-github"
                    viewBox="0 0 16 16"
                    
                >
                    <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                    fill="currentColor"
                    ></path>
                </svg>
                </a>
                <div className="tooltip">GitHub</div>
            </li>
            <li className="icon-content">
                <a
                href="mailto:owen.nyenhuis@gmail.com"
                aria-label="email"
                data-social="email"
                >
                <div className="filled"></div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-email"
                    viewBox="0 0 16 16"
                    
                >
                    <path
                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z M.05 4.555A2 2 0 0 0 0 5v.217l8 4.8 8-4.8V5a2 2 0 0 0-.05-.445L8 9 .05 4.555z "
                    fill="currentColor"
                    ></path>
                </svg>
                </a>
                <div className="tooltip">Email</div>
            </li>
            </ul>

        </div>
      </div>
    </>
  )
}


export default App
