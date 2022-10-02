import React from 'react'

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
                            return <li><a href={navlink.url}>{navlink.link}</a></li>
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navlink
