import React from 'react'

const NAVLINKS = [
    {
        "key":"Pages",
        "link":null,
        "subarray":[
            {"key":"Candidate", "link":"/candidate"},
            {"key":"Job Details", "link":"/jobdetails"},
            {"key":"Elements", "link":"/elements"}
        ]
    },
    {
        "key":"Blog",
        "link":"/blog",
        "subarray":[
            {"key":"Blog", "link":"/blog"},
            {"key":"Single Blog", "link":"/singleblog"},
        ]
    },
    {
        "key":"Contact",
        "link":"/contact"
    },
    {
        "key":"Browse Job",
        "link":"/browsejob"
    }
]
    
function Navlinks() {
    return (
        <div>
            <ul id="navigation">
                {NAVLINKS.map((index, navlinks)=>{
                    console.log({navlinks{index});
                    <li><a href={navlinks.link}>{navlinks.key}</a></li>
})}
                
                {/* <li><a href="jobs.html">Browse Job</a></li>
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
                <li><a href="/contact">Contact</a></li> */}
            </ul>
        </div>
    )
}

export default Navlinks
