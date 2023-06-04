import React from 'react'
import BreadCum from '../container/BreadCum'
import JobCard from '../components/JobCard'
import Pagination from '../components/Pagination'

function Jobs() {
    return (
        <div>
            <BreadCum label="4536+ Jobs Available" />
            <div className="job_listing_area plus_padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="job_filter white-bg">
                                <div className="form_inner white-bg">
                                    <h3>Filter</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="single_field">
                                                    <input type="text" placeholder="Search keyword" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single_field">
                                                    <select className="wide">
                                                        <option data-display="Location">Location</option>
                                                        <option value="1">Rangpur</option>
                                                        <option value="2">Dhaka </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single_field">
                                                    <select className="wide">
                                                        <option data-display="Category">Category</option>
                                                        <option value="1">Category 1</option>
                                                        <option value="2">Category 2 </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single_field">
                                                    <select className="wide">
                                                        <option data-display="Experience">Experience</option>
                                                        <option value="1">Experience 1</option>
                                                        <option value="2">Experience 2 </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single_field">
                                                    <select className="wide">
                                                        <option data-display="Job type">Job type</option>
                                                        <option value="1">full time 1</option>
                                                        <option value="2">part time 2 </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single_field">
                                                    <select className="wide">
                                                        <option data-display="Qualification">Qualification</option>
                                                        <option value="1">Qualification 1</option>
                                                        <option value="2">Qualification 2</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="single_field">
                                                    <select className="wide">
                                                        <option data-display="Gender">Gender</option>
                                                        <option value="1">male</option>
                                                        <option value="2">female</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="range_wrap">
                                    <label htmlFor="amount">Price range:</label>
                                    <div id="slider-range"></div>
                                    <p>
                                        <input type="text" id="amount" readOnly style={{border:0, color:"#7A838B", fontSize: "14px", fontWeight:"400px"}} />
                                    </p>
                                </div>
                                <div className="reset_btn">
                                    <button className="boxed-btn3 w-100" type="submit">Reset</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="recent_joblist_wrap">
                                <div className="recent_joblist white-bg ">
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <h4>Job Listing</h4>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="serch_cat d-flex justify-content-end">
                                                <select>
                                                    <option data-display="Most Recent">Most Recent</option>
                                                    <option value="1">Marketer</option>
                                                    <option value="2">Wordpress </option>
                                                    <option value="4">Designer</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="job_lists m-0">
                                <div className="row">
                                <JobCard />
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Jobs
