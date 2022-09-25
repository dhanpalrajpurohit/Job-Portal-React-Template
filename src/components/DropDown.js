import React from 'react'

function DropDown() {
    return (
        <div className="col-lg-12">
            <div className="single_field">
                <select className="wide">
                    <option data-display="Location">Location</option>
                    <option value="1">Rangpur</option>
                    <option value="2">Dhaka </option>
                </select>
            </div>
        </div>
    )
}

export default DropDown
