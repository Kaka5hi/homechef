import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <section className='hero-section'>
            <div className="hero-left">
                <img src="/images/banner-img.jpg" alt="banner" />
                <div className="hero-details">
                    <span>let's</span>
                    <span>cook</span>
                    <p>Bringing you the best recipes from all around the world.</p>
                    <Link to='/explore'>Explore recipes...</Link>
                </div>
            </div>
            <div className="hero-right">
                <article>
                    <img src="/images/pizza.jpg" alt="pizza" />
                    <span>500+ Variety of dishes and 20+ Meal types from snacks to main course </span>
                </article>
                
                <article>
                    <img src="/images/lasagna.jpg" alt="lasagna" />
                    <span>Recipes from different Cuisines like Italian, French, Thai and many more...</span>
                </article>

                <article>
                    <img src="/images/sphagetti.jpg" alt="sphagetti" />
                    <span>Included recipes from world class chef </span>
                </article>
            </div>
        </section>
    )
}

export default Home
