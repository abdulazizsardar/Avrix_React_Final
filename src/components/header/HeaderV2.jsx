import React from 'react';
import SocialShare from '../others/SocialShare';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import { toast } from 'react-toastify';

const HeaderV2 = ({ headerBg, centerContent = true }) => {

    const [sidebarClass, setSidebarClass] = useState(false)

    const addSidebar = () => {
        setSidebarClass(true)
        document.body.classList.add('on-sides')
    }

    const removeSidebar = () => {
        setSidebarClass(false)
        document.body.classList.remove('on-sides');

        setSidebarMenu(false)
        setSidebarMenu2(false)
    }

    const handleMail = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Subscribe to our Newsletter")
    }

    // Sidebar Menu

    const [sidebarMenu, setSidebarMenu] = useState(false)
    const [sidebarMenu2, setSidebarMenu2] = useState(false)

    const handleSidebarMenu = () => {
        setSidebarMenu(!sidebarMenu)
    }

    const handleSidebarMenu2 = () => {
        setSidebarMenu2(!sidebarMenu2)
    }

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-default validnavs nav-full-width white navbar-fixed ${headerBg} ${sidebarClass ? "pause-sticked" : ""}`}>
                    <div className="container-full d-flex justify-content-between align-items-center">
                        <div className="col-xl-2 col-lg-3">
                            <div className="navbar-header">
                                <Link className="navbar-brand" to="/#">
                                    <img src="/img/logo/logo-light.png" className="logo logo-scrolled" alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        {centerContent ?
                            <>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="collapse navbar-collapse" id="navbar-menu">
                                        <div className="left-info">
                                            <p><strong>Contact</strong> <a href="mailto:support@avrix.com">support@avrix.com</a></p>
                                        </div>
                                        <div className="right-info">
                                            <SocialShare />
                                        </div>
                                    </div>
                                </div>
                            </>
                            : <></>
                        }
                        <div className="attr-right">
                            <div className="attr-nav flex">
                                <ul>
                                    <li className="side-menu">
                                        <Link to="" onClick={addSidebar}>
                                            <strong>MENU </strong>
                                            <div className="line">
                                                <span className="bar-1"></span>
                                                <span className="bar-2"></span>
                                                <span className="bar-3"></span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2">
                                <div className={`side text-light ${sidebarClass ? "on" : ""}`}>
                                    <Link to="" className="close-side" onClick={removeSidebar}>Close <i className="fas fa-times"></i></Link>
                                    <div className="widget">
                                        <div className="logo">
                                            <img src="/img/logo/logo-light.png" alt="Logo" />
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1">
                                                <div className="side-navbar-inner">
                                                    <div className="simple-menu">
                                                        <ul className="simple-menu-list">
                                                            <li onClick={handleSidebarMenu}>
                                                                <Link to="">Home </Link>
                                                                <i className="fas fa-plus"></i>
                                                                <ul className={`sub-menu ${sidebarMenu ? "animated fadeInDown d-block" : ""}`}>
                                                                    <li><Link to="/#">Digital Agency</Link></li>
                                                                    <li><Link to="/home-2#">Portfolio Interactive</Link></li>
                                                                    <li><Link to="/home-3#">Creative Agency</Link></li>
                                                                    <li><Link to="/home-4#">Parallax Portfolio</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li onClick={handleSidebarMenu2}>
                                                                <Link to="">Blog </Link>
                                                                <i className="fas fa-plus"></i>
                                                                <ul className={`sub-menu ${sidebarMenu2 ? "animated fadeInDown d-block" : ""}`}>
                                                                    <li><Link to="/blog-standard#">Blog Standard</Link></li>
                                                                    <li><Link to="/blog-with-sidebar#">Blog With Sidebar</Link></li>
                                                                    <li><Link to="/blog-2-column#">Blog Grid Two Colum</Link></li>
                                                                    <li><Link to="/blog-3-column#">Blog Grid Three Colum</Link></li>
                                                                    <li><Link to="/blog-single#">Blog Single</Link></li>
                                                                    <li><Link to="/blog-single-sidebar#">Blog Single With Sidebar</Link></li>
                                                                </ul>
                                                            </li>
                                                            <li><Link to="/services#">Services </Link></li>
                                                            <li><Link to="/about-us#">About</Link> </li>
                                                            <li><Link to="/contact-us#">Contact</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 offset-xl-2 col-lg-5 offset-lg-1">
                                                <div className="side-widgets">
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
                                                                        <strong>support@validtheme.com</strong>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="content">
                                                                        <p>Contact</p>
                                                                        <strong>+44-20-7328-4499</strong>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="widget newsletter">
                                                        <h4 className="title">Get Subscribed!</h4>
                                                        <form onSubmit={handleMail}>
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
                                                        <SocialShare />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlay-screen"></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV2;