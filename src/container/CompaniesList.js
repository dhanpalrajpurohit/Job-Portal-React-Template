import React from 'react'

function CompaniesList() {
  return (
    <div>
      <div className="top_companies_area">
        <div className="container">
            <div className="row align-items-center mb-40">
                <div className="col-lg-6 col-md-6">
                    <div className="section_title">
                        <h3>Top Companies</h3>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="brouse_job text-right">
                        <a href="jobs.html" className="boxed-btn4">Browse More Job</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-xl-3 col-md-6">
                    <div className="single_company">
                        <div className="thumb">
                            <img src="img/svg_icon/5.svg" alt="" />
                        </div>
                        <a href="jobs.html"><h3>Snack Studio</h3></a>
                        <p> <span>50</span> Available position</p>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-6">
                    <div className="single_company">
                        <div className="thumb">
                            <img src="img/svg_icon/4.svg" alt="" />
                        </div>
                        <a href="jobs.html"><h3>Snack Studio</h3></a>
                        <p> <span>50</span> Available position</p>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-6">
                    <div className="single_company">
                        <div className="thumb">
                            <img src="img/svg_icon/3.svg" alt="" />
                        </div>
                        <a href="jobs.html"><h3>Snack Studio</h3></a>
                        <p> <span>50</span> Available position</p>
                    </div>
                </div>
                <div className="col-lg-4 col-xl-3 col-md-6">
                    <div className="single_company">
                        <div className="thumb">
                            <img src="img/svg_icon/1.svg" alt="" />
                        </div>
                        <a href="jobs.html"><h3>Snack Studio</h3></a>
                        <p> <span>50</span> Available position</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CompaniesList
