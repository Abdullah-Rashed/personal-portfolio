import React from 'react';
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portftolio_item_image"></div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://" className="btn btn_primary" target="_blank">Live Demo</a>
        </article>



        <article className='portfolio_item'>
          <div className="portftolio_item_image"></div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://" className="btn btn_primary" target="_blank">Live Demo</a>
        </article>



        <article className='portfolio_item'>
          <div className="portftolio_item_image"></div>
          <h3>Portfolio Item Title</h3>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://" className="btn btn_primary" target="_blank">Live Demo</a>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
