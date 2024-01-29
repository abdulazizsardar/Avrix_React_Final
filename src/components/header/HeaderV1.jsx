import React from 'react';
import { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import { useEffect } from 'react';
import HeaderCallToAction from './HeaderCallToAction';
import HeaderSidebarMenu from './HeaderSidebarMenu';

const HeaderV1 = ({ darkLogo = false, mailHeader = false }) => {

    // Sticky Menu 
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [navbarClass, setNavbarClass] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const addClasses = () => {
        setNavbarClass(true);
        setIsSidebarOpen(true);
        document.body.classList.add('on-side');
    };

    const removeClasses = () => {
        setNavbarClass(false);
        setIsSidebarOpen(false);
        document.body.classList.remove('on-side');
    };

    // Mobile Nav 

    const [mobilenavbar, setMobileNavbar] = useState(false)
    const [mobileOverlay, setMobileOverlay] = useState(false)
    const [mobileResponsive, setMobileResponsive] = useState(false)

    const handleMobileNav = () => {
        setMobileNavbar(true)
        setMobileOverlay(true)
        setMobileResponsive(true)
    }

    const removeMobileNav = () => {
        setMobileNavbar(false)
        setMobileOverlay(false)
        setMobileResponsive(false)
        setMobileDropdown(false)
        setMobileDropdown2(false)
        setMobileDropdown3(false)
        setMobileDropdown4(false)
        setMobileDropdown5(false)
        setMobileDropdown6(false)
    }

    // Mobile Dropdown
    const [mobileDropdown, setMobileDropdown] = useState(false)
    const [mobileDropdown2, setMobileDropdown2] = useState(false)
    const [mobileDropdown3, setMobileDropdown3] = useState(false)
    const [mobileDropdown4, setMobileDropdown4] = useState(false)
    const [mobileDropdown5, setMobileDropdown5] = useState(false)
    const [mobileDropdown6, setMobileDropdown6] = useState(false)

    const handleDropdown = () => {
        setMobileDropdown(!mobileDropdown)
    }

    const handleDropdown2 = () => {
        setMobileDropdown2(!mobileDropdown2)
    }

    const handleDropdown3 = () => {
        setMobileDropdown3(!mobileDropdown3)
    }

    const handleDropdown4 = () => {
        setMobileDropdown4(!mobileDropdown4)
    }

    const handleDropdown5 = () => {
        setMobileDropdown5(!mobileDropdown5)
    }

    const handleDropdown6 = () => {
        setMobileDropdown6(!mobileDropdown6)
    }

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed no-background ${isSticky ? 'sticked' : ''} ${navbarClass ? "on menu-center no-full pause-sticked" : ""} ${mobileResponsive ? "navbar-responsive" : ""}`}>
                    <div className="container d-flex justify-content-between align-items-center">
                        
                        {/* Logo  */}
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={handleMobileNav}>
                                <i className="fa fa-bars"></i>
                            </button>
                            <Link className="navbar-brand" to="/#">
                                {darkLogo ? <><img src="/img/logo/logo.png" alt="Logo" /></> :
                                    <><img src="/img/logo/logo-light.png" alt="Logo" /></>}
                            </Link>
                        </div>

                        {/* Main Menu */}
                        <div className={`${mobilenavbar ? "collapse-mobile show" : ""} navbar-collapse collapse-mobile collapse `} id="navbar-menu">
                            <Link to="/#">
                                {darkLogo ? <><img src="/img/logo/logo.png" alt="Logo" /></> :
                                    <><img src="/img/logo/logo-light.png" alt="Logo" /></>}
                            </Link>
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={removeMobileNav}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                            <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                                <li className={`dropdown ${mobileDropdown ? "on" : ""}`} >
                                    <Link to="#" className="dropdown-toggle active" data-toggle="dropdown" onClick={handleDropdown} >Home</Link>
                                    <ul className={`dropdown-menu ${mobileDropdown ? "animated fadeInDown" : " "}`}>
                                        <li><Link to="/#">Digital Agency</Link></li>
                                        <li><Link to="/home-2#">Portfolio Interactive</Link></li>
                                        <li><Link to="/home-3#">Creative Agency</Link></li>
                                        <li><Link to="/home-4#">Parallax Portfolio</Link></li>
                                        <li className={`dropdown ${mobileDropdown5 ? "on" : ""}`} >
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={handleDropdown5}>Home Light Version</Link>
                                            <ul className={`dropdown-menu ${mobileDropdown5 ? "animated fadeInDown" : " "}`}>
                                                <li><Link to="/home-light#">Digital Agency</Link></li>
                                                <li><Link to="/home-3-light#">Creative Agency</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${mobileDropdown2 ? "on" : ""}`} >
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={handleDropdown2}>Pages</Link>
                                    <ul className={`dropdown-menu ${mobileDropdown2 ? "animated fadeInDown" : " "}`}>
                                        <li><Link to="/about-us#">About Us</Link></li>
                                        <li><Link to="/team#">Team Members</Link></li>
                                        <li><Link to="/team-details#">Team Details</Link></li>
                                        <li className={`dropdown ${mobileDropdown6 ? "on" : ""}`} >
                                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={handleDropdown6}> Projects</Link>
                                            <ul className={`dropdown-menu ${mobileDropdown6 ? "animated fadeInDown" : ""}`}>
                                                <li><Link to="/project#">Project Showcase</Link></li>
                                                <li><Link to="/project-details#">Project Details</Link></li>
                                                <li><Link to="/project-details-2#">Project Details Two</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="/contact-us#">Contact Us</Link></li>
                                        <li><Link to="/error404#">Error Page</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${mobileDropdown3 ? "on" : ""}`} >
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={handleDropdown3} >Services</Link>
                                    <ul className={`dropdown-menu ${mobileDropdown3 ? "animated fadeInDown" : " "}`}>
                                        <li><Link to="/services#">Service Version One</Link></li>
                                        <li><Link to="/services-2#">Service Version Two</Link></li>
                                        <li><Link to="/services-details#">Marketing Strategy</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${mobileDropdown4 ? "on" : ""}`} >
                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={handleDropdown4}>Blog</Link>
                                    <ul className={`dropdown-menu ${mobileDropdown4 ? "animated fadeInDown" : " "}`}>
                                        <li><Link to="/blog-standard#">Blog Standard</Link></li>
                                        <li><Link to="/blog-with-sidebar#">Blog With Sidebar</Link></li>
                                        <li><Link to="/blog-2-column#">Blog Grid Two Colum</Link></li>
                                        <li><Link to="/blog-3-column#">Blog Grid Three Colum</Link></li>
                                        <li><Link to="/blog-single#">Blog Single</Link></li>
                                        <li><Link to="/blog-single-sidebar#">Blog Single With Sidebar</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contact-us#">contact</Link></li>
                            </ul>
                        </div>
                        {mailHeader ?
                            <><HeaderCallToAction /> </>
                            : <>
                                <HeaderSidebarMenu removeClasses={removeClasses} isSidebarOpen={isSidebarOpen} addClasses={addClasses} />
                            </>}
                    </div>
                    <div className={` ${mobileOverlay ? "opened" : ""} overlay-screen`}></div>
                </nav>
            </header>
        </>
    );
};

export default HeaderV1;