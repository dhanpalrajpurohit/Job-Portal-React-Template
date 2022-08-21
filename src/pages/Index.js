import React from 'react'

import Header from "../container/Header";
import Footer from "../container/Footer";
import Slider from "../container/Slider"
import JobSearch from "../container/JobSearch";
import JObCategories from "../container/JobCategories"; 
import JobList from "../container/Joblist";
import CandidateList from "../container/CandidateList"
import CompaniesList from  "../container/CompaniesList";
function Index() {
  return (
    <div>
      <Header />
      <Slider />
      <JobSearch />
      <JObCategories />
      <JobList />
      <CandidateList />
      <CompaniesList />
      <Footer />
    </div>
  )
}

export default Index
