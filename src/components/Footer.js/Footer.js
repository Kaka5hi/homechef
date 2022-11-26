import React from 'react'
import {FaFacebook, FaPinterest} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <ul className="social-links">
                <li className="link"><AiFillInstagram /></li>
                <li className="link"><FaFacebook /></li>
                <li className="link"><FaPinterest /></li>
            </ul>
        </footer>
    )
}

export default Footer
