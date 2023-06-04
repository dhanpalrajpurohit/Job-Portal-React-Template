import React from 'react'

import Slider from "../container/Slider"
import JobSearch from "../container/JobSearch";
import JObCategories from "../container/JobCategories"; 
import JobList from "../container/Joblist";
import {CandidateList, CompaniesList} from "../container"

import Header from '../components/Header/header';
import Footer from '../components/Footer/Footer';
function Home() {
  return (
    <div>
      <Header/>
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

export default Home;
