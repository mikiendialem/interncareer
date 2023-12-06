import React from 'react'
import { useState,useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './All.css'

function All() {
    const emailAddress = 'femibiki273@gmail.com';
    const cvlink = 'https://drive.google.com/file/d/1jLZFi07LjOQWqh2CcmhcVcjPwwb6QLJT/view?usp=drive_link';
    const subject = 'Inquiry about your web design service';
    const handleEmailClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };
    const link1 ='https://mikiendialem.vercel.app/';
    const link2 = 'https://github.com/mikiendialem/GDSC-final-project.git';
    const link3 = 'https://github.com/AASTU-Project-Based-Learning/Recipy-app.git';

    const slideIn = useSpring({
        from: { opacity: 0, transform: 'translateX(-50px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 }, // Adjust the duration as needed
        loop: { reverse: true },
      });
    
      useEffect(() => {
        const handleResize = () => {
          // Trigger a re-render when the window is resized
          window.dispatchEvent(new Event('resize'));
        };
    
        // Attach the event listener
        window.addEventListener('resize', handleResize);
    
        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const [htmlSkill, setHtmlSkill] = useState(96);
    const [cssSkill, setCssSkill] = useState(94);
    const [javascriptSkill, setJavascriptSkill] = useState(75);
    const [pythonSkill, setPythonSkill] = useState(70);
    const [reactSkill, setReactSkill] = useState(85);
    const [nodeSkill, setNodeSkill] = useState(70);
    const [bootstrapSkill, setBootstrapSkill] = useState(90);
    const [gitSkill, setGitSkill] = useState(80);

    const handleHtmlSkillChange = (event) => {
        setHtmlSkill(event.target.value);
      };
    
      const handleCssSkillChange = (event) => {
        setCssSkill(event.target.value);
      };
    
      const handleJavascriptSkillChange = (event) => {
        setJavascriptSkill(event.target.value);
      };
    
      const handlePythonSkillChange = (event) => {
        setPythonSkill(event.target.value);
      };
    
      const handleReactSkillChange = (event) => {
        setReactSkill(event.target.value);
      };
    
      const handleNodeSkillChange = (event) => {
        setNodeSkill(event.target.value);
      };
    
      const handleBootstrapSkillChange = (event) => {
        setBootstrapSkill(event.target.value);
      };
    
      const handleGitSkillChange = (event) => {
        setGitSkill(event.target.value);
      };

  return (
    <div className='all'>
        <div className='about'>
            <div className="about-second">
                <div className='my-name'>
                    <p>I'm Mikiyas Endalew and <br/>I am a website developer.</p>
                    <div className='separte1'>
                        <button onClick={handleEmailClick}>Hire me</button>
                        <span> <a href={cvlink} download>Download Cv</a></span>
                    </div>
                </div>
                <div class='my-pic'>
                    <div class='photo'></div>
                </div>
            </div>
          </div>
          <hr/>
          <div className='home'>
                <h1>About</h1>
                <div className='abul'></div>
                <div className='home-sec'>
                    <h2 className='des2'>I'M THE ONE WHO WILL DESIGN AND DEVELOP YOUR WEBSITE.</h2>
                    <p>"Welcome to my portfolio website! My name is Mikiyas Endalew, and I am a passionate web developer. With a strong background in web development, I specialize in creating visually appealing and functional websites that provide an exceptional user experience. My goal is to bring your ideas to life and help you establish a strong online presence."</p>
                </div>
                <animated.div style={slideIn}>
                    <div className='home-pic'></div>
                </animated.div>
                
          </div>
          <div className='porto'>
            <h1>Portofolio</h1>
            <p className='goce'>I recently completed three web development projects. The first project was a responsive e-commerce website for a local artifacts store. The website features a custom to show a products and I was trying some UI to display. The second project was a website design recipe website. The third to website is Snapshot that allows users to see a wildlife pictures.</p>
            <div className='porto-sec-1'>
                <div className="ec"></div>
                <h2>E-commerce website <span><a href={link1} rel="noopener noreferrer">To see</a></span></h2>
                <p>
                    <strong>Technologies Used:</strong> React, Bootstrap
                </p>
                <p>
                    <strong>My Role:</strong> Front-end development
                </p>
                <p>
                    <strong>Challenges Faced:</strong> Implementing a responsive design.
                </p>
                <p>
                    <strong>Solutions Implemented:</strong> Utilized Bootstrap for responsive layout.
                </p>
            </div>
            <div className='porto-sec-2'>
                <div className="reci"></div>
                <h2>Recipe app <span><a href={link3} target='_blank' rel="noopener noreferrer"> To see code </a></span></h2>
                <p>
                    <strong>Technologies Used:</strong> React, Bootstrap
                </p>
                <p>
                    <strong>My Role:</strong> Front-end development
                </p>
                <p>
                    <strong>Challenges Faced:</strong> Implementing a responsive design.
                </p>
                <p>
                    <strong>Solutions Implemented:</strong> Utilized Bootstrap for responsive layout.
                </p>
            </div>
            <div className='porto-sec-3'>
                <div className="snap"></div>
                <h2>Snapshot site <span><a href={link2} target='_blank' rel="noopener noreferrer"> To see code</a></span></h2>
                <p>
                    <strong>Technologies Used:</strong> React, Bootstrap
                </p>
                <p>
                    <strong>My Role:</strong> Front-end development
                </p>
                <p>
                    <strong>Challenges Faced:</strong> Implementing a responsive design.
                </p>
                <p>
                    <strong>Solutions Implemented:</strong> Utilized Bootstrap for responsive layout.
                </p>
            </div>
        </div>
        <hr/>
        <div className="skills">
            <h1>Skills</h1>
            <div className="skillsd">
                <div className="skill-container">
                    <h4>HTML:</h4>
                    <input type="range" min="0" max="100" step="1" value={htmlSkill} onChange={handleHtmlSkillChange}/>
                </div>
                <div className="skill-container">
                    <h4>CSS:</h4>
                    <input type="range" min="0" max="100" step="1" value={cssSkill} onChange={handleCssSkillChange}/>
                </div>
                <div className="skill-container">
                    <h4>JAVASCRIPT:</h4>
                    <input type="range" min="0" max="100" step="1" value={javascriptSkill} onChange={handleJavascriptSkillChange}/>
                </div>
                <div className="skill-container">
                    <h4>PYTHON:</h4>
                    <input type="range" min="0" max="100" step="1" value={pythonSkill} onChange={handlePythonSkillChange}/>
                </div>
                <div className="skill-container">
                    <h4>REACT:</h4>
                    <input type="range"min="0" max="100" step="1" value={reactSkill} onChange={handleReactSkillChange}/>
                </div>
                <div className="skill-container">
                    <h4>NODE:</h4>
                    <input type="range" min="0" max="100" step="1" value={nodeSkill} onChange={handleNodeSkillChange}/> 
                </div>
                <div className="skill-container">
                    <h4>BOOTSTRAP:</h4>
                    <input type="range"min="0" max="100" step="1" value={bootstrapSkill} onChange={handleBootstrapSkillChange}
                />
                </div>
                <div className="skill-container">
                    <h4>GIT:</h4>
                    <input type="range" min="0" max="100" step="1" value={gitSkill} onChange={handleGitSkillChange}/>
                </div>
            </div>
            </div>
        <hr/>
        <div className='service'>
            <h1>Service</h1>
            <div className='seul'></div>
            <div className='servicepart'>
                <div className='service1'>
                    <span className="material-symbols-outlined">diamond</span>
                    <h3>Web design</h3>
                    <p>I focus on creating visually appealing and user-friendly websites. I work closely with my clients to understand their brand and target audience so as to design websites. </p>
                    <button onClick={handleEmailClick}>Contact via Email</button>
                </div>
                <div className='service2'>
                    <span className="material-symbols-outlined">code</span>
                    <h3>Web Development</h3>
                    <p>I specialize in building responsive websites that are optimized for search engines and user experience. I use the latest technologies to create fast,unique, secure, and scalable web applications.</p>
                    <button onClick={handleEmailClick}>Contact via Email</button>
                </div>
                <div className='service3'>
                    <span className="material-symbols-outlined">work</span>
                    <h3>UI/UX</h3>
                    <p>User experience is at the core of my design philosophy. I'm the UI/UX expert.</p>
                    <button onClick={handleEmailClick}>Contact via Email</button>
                </div>
                <div className='service4'>
                    <span className="material-symbols-outlined">bar_chart</span>
                    <h3>Data Train</h3>
                    <p>My portfolio showcases a range of data training projects that demonstrate my expertise in handling complex datasets and implementing advanced algorithms.</p>
                    <button onClick={handleEmailClick}>Contact via Email</button>
                </div>
            </div>
            </div>
            <hr/>
            <div className='contact'>
                <h1>Contact</h1>
                <div className='coul'></div>
                <div className="contact-sec">
                    <div className="consec1">
                        <h1><span class="material-symbols-outlined">mail</span></h1>
                        <p><strong>Email: </strong><span onClick={handleEmailClick} className='te'>femibiki273@gmail.com</span></p>
                    </div>
                    <div className="vl"></div>
                    <div className="consec2">
                        <h1><span class="material-symbols-outlined">folder_data</span></h1> 
                        <p><strong>Telegram: </strong><a href={link2} target='_blank' rel="noopener noreferrer" className='te'>https://t.me/mikiendialem</a></p>
                    </div>
                    <div className="vl"></div>
                    <div className="consec3">
                        <h1><span class="material-symbols-outlined">phone_iphone</span></h1>
                            <p><strong>Number:</strong>+251941900743</p>
                    </div>
                </div>
                <h6>©️copyright reserved to me</h6>
            </div>
    </div>
  )
}

export default All
