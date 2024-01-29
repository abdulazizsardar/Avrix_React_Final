import React from 'react';
import { toast } from 'react-toastify';
import SocialWidget from '../widgets/SocialWidget';
import { HashLink as Link } from 'react-router-hash-link'

const HeaderSidebarMenu = ({ isSidebarOpen, removeClasses, addClasses }) => {

    const handleEmail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks for your Email")
    }

    return (
        <>
            <div className="attr-right">
                <div className="attr-nav flex">
                    <ul>
                        <li className="side-menu">
                            <Link to="" onClick={addClasses}>
                                <span className="bar-1"></span>
                                <span className="bar-2"></span>
                                <span className="bar-3"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={`side ${isSidebarOpen ? "on" : ""}`} >
                    <Link to="" className="close-side" onClick={removeClasses}><i className="fas fa-times"></i></Link>
                    <div className="widget">
                        <div className="logo">
                            <img src="/img/logo/logo-light.png" alt="Logo" />
                        </div>
                    </div>
                    <div className="widget">
                        <p>
                            Digital marketing is the component of marketing that uses the Internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.
                        </p>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Address</p>
                                        <strong>California, TX 70240</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p>
                                        <strong><a href="mailto:support@validtheme.com" className='color-para'>support@validtheme.com</a></strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Contact</p>
                                        <strong><a href="tel:+44-20-7328-4499" className='color-para'>+44-20-7328-4499</a></strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Get Subscribed!</h4>
                        <form onSubmit={handleEmail}>
                            <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" required />
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <i className="fas fa-arrow-right"></i>
                                    </button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="widget social">
                        <SocialWidget />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderSidebarMenu;