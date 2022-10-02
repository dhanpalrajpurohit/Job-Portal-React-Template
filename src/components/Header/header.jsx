import React from 'react'

import NavLogo from './navlogo.jsx'
import Navlink from './navLink.jsx'

function Header() {
  return (
    <div>
      <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid ">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <NavLogo />
                            <Navlink />
                            
                                    {/* <nav>
                                        <ul id="navigation">
                                            <li><a href="/">home</a></li>
                                            <li><a href="jobs.html">Browse Job</a></li>
                                            <li><a href="#">pages <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="candidate.html">Candidates </a></li>
                                                    <li><a href="job_details.html">job details </a></li>
                                                    <li><a href="elements.html">elements</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/blog">blog <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                    <li><a href="blog.html">blog</a></li>
                                                    <li><a href="single-blog.html">single-blog</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="/contact">Contact</a></li>
                                        </ul>
                                    </nav> */}
                                    

                               
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="phone_num d-none d-xl-block">
                                        <a href="#">Log in</a>
                                    </div>
                                    <div className="d-none d-lg-block">
                                        <a className="boxed-btn3" href="#">Post a Job</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
    </div>
  )
}

export default Header
