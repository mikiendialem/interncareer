import React from 'react';
import './Service.css';

function Service() {
  const emailAddress = 'femibiki273@gmail.com';
  const subject = 'Inquiry about your web design service';

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='service'>
      <h1>Service</h1>
      <div className='seul'></div>
      <div className='servicepart'>
        <div className='service1'>
            <span class="material-symbols-outlined">diamond</span>
            <h3>Web design</h3>
            <p>I focus on creating visually appealing and user-friendly websites. I work closely with my clients to understand their brand and target audience so as to design websites that are both functional and aesthetically pleasing</p>
            <button onClick={handleEmailClick}>Contact via Email</button>
        </div>
        <div className='service2'>
            <span class="material-symbols-outlined">code</span>
            <h3>Web Development</h3>
            <p>I specialize in building responsive websites that are optimized for search engines and user experience. I use the latest technologies to create fast,unique, secure, and scalable web applications.</p>
            <button onClick={handleEmailClick}>Contact via Email</button>
        </div>
        <div className='service3'>
            <span class="material-symbols-outlined">work</span>
            <h3>UI/UX</h3>
            <p>User experience is at the core of my design philosophy. I'm the UI/UX expert.</p>
            <button onClick={handleEmailClick}>Contact via Email</button>
        </div>
        <div className='service4'>
            <span class="material-symbols-outlined">bar_chart</span>
            <h3>Data Train</h3>
            <p>My portfolio showcases a range of data training projects that demonstrate my expertise in handling complex datasets and implementing advanced algorithms.</p>
            <button onClick={handleEmailClick}>Contact via Email</button>
        </div>
      </div>
    </div>
  );
}

export default Service;
