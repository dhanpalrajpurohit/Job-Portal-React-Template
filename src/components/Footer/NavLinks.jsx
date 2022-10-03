import React from 'react'

function NavLinks(props) {
    return (
        <div className="col-xl-2 col-md-6 col-lg-2">
            <div className="footer_widget wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".4s">
                <h3 className="footer_title">
                    {props.header}
                </h3>
                <ul>
                    {props.navlinks.map((navlink)=>{
                        return <li><a href={navlink.url}>{navlink.value}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default NavLinks
