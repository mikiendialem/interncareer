import React from 'react'
import './Porto.css'

function Porto() {
  const link1 ='https://mikiendialem.vercel.app/';
  const link2 = 'https://github.com/mikiendialem/GDSC-final-project.git';
  const link3 = 'https://github.com/AASTU-Project-Based-Learning/Recipy-app.git';
  return (
    <div className='porto'>
        <h1>Portofolio</h1>
        <div className="poul"></div>
        <p className='goce'>I recently completed three web development projects. The first project was a responsive e-commerce website for a local artifacts store. The website features a custom to show a products and I was trying some UI to display. The second project was a website design recipe website. The third to website is Snapshot that allows users to see a wildlife pictures.</p>
        <div className='porto-sec-1'>
            <div className="ec"></div>
            <h2>E-commerce website <span><a href={link1} rel="noopener noreferrer">To see</a></span></h2>
        </div>
        <div className='porto-sec-2'>
            <div className="reci"></div>
            <h2>Recipe app <span><a href={link3} target='_blank' rel="noopener noreferrer"> To see code </a></span></h2>
        </div>
        <div className='porto-sec-3'>
            <div className="snap"></div>
            <h2>Snapshot site <span><a href={link2} target='_blank' rel="noopener noreferrer"> To see code</a></span></h2>
        </div>
    </div>
  )
}

export default Porto
