import { Box } from '@mui/system';
import React from 'react'
import './Profile.css';

import Header from '../../components/Header/header';

function Profile() {
  return (
    <div>
    <div class="container-fluid overcover">
        <div class="container profile-box">
           <div class="cover-image row">
               <img src="img/images/bloogs-6.jpg" alt="" />
           </div>
            <div class="row">
                <div class="col-lg-8 col-md-7 detail-px no-padding">
                    <h3>Profile</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a felis aliquam justo placerat mattis in quis felis. Sed pulvinar egestas mollis. Nullam mattis, justo id viverra bibendum, magna erat venenatis lacus, quis viverra nisi urna et lacus. Maecenas sodales viverra mi quis dictum. Nam mollis vel metus nec sollicitudin</p>
                    <h3 class="mth3">Profile</h3>
                    <div class="fx-ro">
                        <div class="dat">
                            2019
                        </div>
                        <div class="detail">
                            <b>Presidant of Debate Club</b>
                            <p>University of California</p>
                        </div>
                    </div>
                    <div class="fx-ro">
                        <div class="dat">
                            2017
                        </div>
                        <div class="detail">
                            <b>Quateback in Football Jersey</b>
                            <p>Abraham High School</p>
                        </div>
                    </div>
                    <div class="fx-ro">
                        <div class="dat">
                            2014
                        </div>
                        <div class="detail">
                            <b>Presidant of Freedom Speech Club</b>
                            <p>Elizabeth Garden</p>
                        </div>
                    </div>
                    
                    <h3 class="mth3">Experience</h3>
                    
                    <div class="fx-ro">
                        <div class="dat">
                            2018
                        </div>
                        <div class="detail">
                            <b>University of California</b>
                            <p>Los Angels, Calfornia</p>
                        </div>
                    </div>
                    
                    <div class="fx-ro">
                        <div class="dat">
                            2016
                        </div>
                        <div class="detail">
                            <b>Masters Arts Club</b>
                            <p>Londan United Kingdom</p>
                        </div>
                    </div>
                    
                    <div class="fx-ro">
                        <div class="dat">
                            2011
                        </div>
                        <div class="detail">
                            <b>Abraham High School</b>
                            <p>Londan United Kingdom</p>
                        </div>
                    </div>
                    
                    <h3 class="mth3">Expertise</h3>
                    
                    <ul class="exrts">
                        <li>Elementry Sports</li>
                        <li>Football Referee</li>
                        <li>Coaching & Assistant</li>
                        <li>Football Coaching</li>
                        <li>Debate Coaching</li>
                        <li>Debate Assisting</li>
                        <li>Maths Tutor</li>
                        <li>Science Tutor</li>
                        <li>Freedom Speech</li>
                        <li>Wood Workshop</li>
                        <li>Coaching</li>
                        <li>Marathon Race</li>
                    </ul>
                    
                </div>
                <div class="col-lg-4 col-md-5 leftgh">
                    <div class="img-box">
                         <img src="img/images/gallery/gallery_12.jpg" alt="" />   
                    </div>
                    <div class="name-det">
                        
                   
                     <h2>Andrews Robertson</h2>
                     
                     <h3>Contact</h3>
                     
                     <p>Andrew Roberson </p>
                     <p>+44 5342 3433</p>
                     
                     <p>113 Slite St. Surry Hills </p>
                     <p>Northumbria, England</p>
                     
                     <p>www.andrewroertson.com</p>
                     
                     <h3>Social Media</h3>
                     
                     <p>fb.com/andrewrobertson</p>
                     <p>twitter@andrewrobertson</p>
                     <p>instagram@andrewrobertson</p>
                     <p>pintrest@andrewrobertson</p>
                   
                     
                     
                      <h3>hobbies</h3>
                      
                      <ul class="hoby row no-margin">
                            <li><i class="fas fa-pencil-alt"></i> <br/> Writing</li>
                            <li><i class="fas fa-bicycle"></i> <br/> Cycling</li>
                            <li><i class="fas fa-futbol"></i> <br/> Football</li>
                            <li><i class="fas fa-film"></i><br/> Movies</li>
                            <li><i class="fas fa-plane-departure"></i> <br/>Travel</li>
                            <li><i class="fas fa-gamepad"></i> <br/> Games</li>
                        </ul>
                        
                    </div>
                    
                   
                     
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Profile
