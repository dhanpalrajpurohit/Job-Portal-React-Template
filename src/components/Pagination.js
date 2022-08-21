import React from 'react'

function Pagination() {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="pagination_wrap">
                    <ul>
                        <li><a href="#"> <i className="ti-angle-left"></i> </a></li>
                        <li><a href="#"><span>01</span></a></li>
                        <li><a href="#"><span>02</span></a></li>
                        <li><a href="#"> <i className="ti-angle-right"></i> </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pagination
