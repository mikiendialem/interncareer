import React from 'react'
import { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css';

function About() {
  const slideIn = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 },
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
  return (
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
  )
}

export default About
