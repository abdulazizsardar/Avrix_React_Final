import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home1 from './pages/homePages/Home1';
import Home1Dark from './pages/homePages/Home1Dark';
import Home2 from './pages/homePages/Home2';
import Home3 from './pages/homePages/Home3';
import Home3Dark from './pages/homePages/Home3Dark';
import Home4 from './pages/homePages/Home4';
import AboutUs from './pages/innerPages/AboutUs';
import Team from './pages/innerPages/Team';
import TeamDetails from './pages/innerPages/TeamDetails';
import Project from './pages/innerPages/Project';
import ProjectDetails from './pages/innerPages/ProjectDetails';
import ProjectDetails2 from './pages/innerPages/ProjectDetails2';
import Services from './pages/servicePage/Services';
import Services2 from './pages/servicePage/Services2';
import ServicesDetails from './pages/servicePage/ServicesDetails';
import BlogStandard from './pages/blogPages/BlogStandard';
import BlogWithSideBar from './pages/blogPages/BlogWithSideBar';
import Blog2Column from './pages/blogPages/Blog2Column';
import Blog3Column from './pages/blogPages/Blog3Column';
import BlogSingle from './pages/blogPages/BlogSingle';
import BlogSingleSidebar from './pages/blogPages/BlogSingleSidebar';
import ContactUs from './pages/innerPages/ContactUs';
import Error404 from './pages/innerPages/Error404';

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home1Dark />}></Route>
                <Route path='/home-light' element={<Home1 />}></Route>
                <Route path='/home-2' element={<Home2 />}></Route>
                <Route path='/home-3' element={<Home3Dark />}></Route>
                <Route path='/home-3-light' element={<Home3 />}></Route>
                <Route path='/home-4' element={<Home4 />}></Route>
                <Route path='/about-us' element={<AboutUs />}></Route>
                <Route path='/team' element={<Team />}></Route>
                <Route path='/team-details/:id' element={<TeamDetails />} />
                <Route path='/team-details' element={<Navigate to='/team-details/1' />} />
                <Route path='/project' element={<Project />}></Route>
                <Route path='/project-details' element={<ProjectDetails />}></Route>
                <Route path='/project-details-2' element={<ProjectDetails2 />}></Route>
                <Route path='/contact-us' element={<ContactUs />}></Route>
                <Route path='/services' element={<Services />}></Route>
                <Route path='/services-2' element={<Services2 />}></Route>
                <Route path='/services-details' element={<ServicesDetails />}></Route>
                <Route path='/blog-standard' element={<BlogStandard />}></Route>
                <Route path='/blog-with-sidebar' element={<BlogWithSideBar />}></Route>
                <Route path='/blog-2-column' element={<Blog2Column />}></Route>
                <Route path='/blog-3-column' element={<Blog3Column />}></Route>
                <Route path='/blog-single' element={<BlogSingle />}></Route>
                <Route path='/blog-single-sidebar' element={<BlogSingleSidebar />}></Route>
                <Route path='/contact' element={<ContactUs />}></Route>
                <Route path='*' element={<Error404 />}></Route>
            </Routes>
        </>
    );
};

export default Routers;