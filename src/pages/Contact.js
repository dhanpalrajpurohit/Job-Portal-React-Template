import React from 'react'

import Header from '../container/Header'
import Footer from '../container/Footer'
import BreadCum from "../container/BreadCum";
import ContactForm from '../container/ContactForm';
import GoogleMap from '../components/Map';

function Contact() {
  return (
    <div>
      <Header />
      <BreadCum label="Contact"/>
      {/* <GoogleMap/> */}
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Contact
