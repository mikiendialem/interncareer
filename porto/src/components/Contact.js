import React from 'react'
import './Contact.css'

function Contact() {
    const emailAddress = 'femibiki273@gmail.com';
    const subject = 'Inquiry about your web design service';
    const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };
    const link2='https://github.com/mikiendialem';
  return (
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
                <p><strong>Github: </strong><a href={link2} target='_blank' rel="noopener noreferrer" className='te'>https://github.com/mikiendialem</a></p>
            </div>
            <div className="vl"></div>
            <div className="consec3">
                <h1><span class="material-symbols-outlined">phone_iphone</span></h1>
                     <p>Number:+251941900743</p>
            </div>
      </div>
      <h6>©️copyright reserved to me</h6>
    </div>
  )
}

export default Contact
