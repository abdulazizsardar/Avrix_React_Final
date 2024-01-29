import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const SocialShare = ({ socialClass }) => {
    return (
        <>
            <ul className={`${socialClass}`}>
                <li className='facebook'>
                    <Link to="http://facebook.com" target='_blank'><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li className='twitter'>
                    <Link to="http://twitter.com" target='_blank'><i className="fab fa-twitter"></i></Link>
                </li>
                <li className='linkedin'>
                    <Link to="http://linkedin.com" target='_blank'><i className="fab fa-linkedin-in"></i></Link>
                </li>
            </ul>
        </>
    );
};

export default SocialShare;