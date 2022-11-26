import { Link } from "react-router-dom";
import React from 'react'
import {IoRestaurantOutline} from 'react-icons/io5'
import '../Navbar/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div className="left-side">
                <Link to='/'><IoRestaurantOutline />Homechef</Link>
            </div>
            <div className="right-side">
                <Link to='/explore'>Explore</Link>
                <Link to='/favorites'>Favorite</Link>
            </div>

        </nav>
    )
}

export default Navbar
