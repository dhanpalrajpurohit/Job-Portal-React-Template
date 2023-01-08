import React from 'react';
import {Link} from "react-router-dom";


const navlinks = [
    {
        "link": "Home",
        "url": "/"
    },
    {
        "link": "Browse Job",
        "url": "/jobs"
    },
    {
        "link": "Candidates",
        "url": "/candidates"
    },
    {
        "link": "Blog",
        "url": "/blog"
    },
    {
        "link": "Contact",
        "url": "/contact"
    }

]

function Navlink() {
    return (
        <div className="col-xl-6 col-lg-7">
            <div className="main-menu  d-none d-lg-block">
                <nav>
                    <ul id="navigation">
                        {navlinks.map((navlink) => {
                            return <li><Link to={navlink.url}>{navlink.link}</Link></li>
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navlink
