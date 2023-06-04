import React from 'react'


import SocialIcons from './SocialIcons';
import NavLinks from './NavLinks';
import FooterLogo from './FooterLogo';
const company_links = [
    {
        "value":"About",
        "url":"/about"
    },
    {
        "value":"Pricing",
        "url":"/pricing"
    },
    {
        "value":"Career Tips",
        "url":"/careertips"
    },
    {
        "value":"FAQ",
        "url":"/faq"
    }
]

const category_links = [
    {
        "value":"Design",
        "url":"/about"
    },
    {
        "value":"Engineering",
        "url":"/pricing"
    },
    {
        "value":"Sales & Marketing",
        "url":"/careertips"
    },
    {
        "value":"Finance",
        "url":"/faq"
    }
]

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <FooterLogo />
                            <SocialIcons/>

                        </div>
                    </div>
                        <NavLinks header="Company" navlinks={company_links}/>
                        <NavLinks header="Category" navlinks={category_links}/>

                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".6s">
                            <h3 className="footer_title">
                                Subscribe
                            </h3>
                            <form action="#" className="newsletter_form">
                                <input type="text" placeholder="Enter your mail" />
                                <button type="submit">Subscribe</button>
                            </form>
                            <p className="newsletter_text">Esteem spirit temper too say adieus who direct esteem esteems
                                luckily.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer;
