import React from 'react'
import './Home.css'

function Home() {
    const emailAddress = 'femibiki273@gmail.com';
    const cvlink = 'https://drive.google.com/file/d/1jLZFi07LjOQWqh2CcmhcVcjPwwb6QLJT/view?usp=drive_link';
    const subject = 'Inquiry about your web design service';
    const handleEmailClick = () => {
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoLink;
    };
  return (
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
  )
}

export default Home
