import React from 'react'

import Slider from "../container/Slider"
import JobSearch from "../container/JobSearch";
import JObCategories from "../container/JobCategories"; 
import JobList from "../container/Joblist";
import CandidateList from "../container/CandidateList"
import CompaniesList from  "../container/CompaniesList";
function Index() {
  return (
    <div>
      <Slider />
      <JobSearch />
      <JObCategories />
      <JobList />
      <CandidateList />
      <CompaniesList />
    </div>
  )
}

export default Index
