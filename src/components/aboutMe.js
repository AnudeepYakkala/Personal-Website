import React from 'react';
import { Link } from 'react-router-dom';

import './aboutMe.css';

export default class aboutMe extends React.Component {
    render() {
        return (
            <div className="color">
                <h1 class="ProjectTitle3">ABOUT ME</h1>
                <div className="About">
                    > Anudeep.education
                    <br></br>
                    <font class="Output"> —> “Sophomore at Purdue University”</font>
                    <br></br>
                    <br></br>
                    > Anudeep.major
                    <br></br>
                    <font class="Output">—> “Computer Science”</font>
                    <br></br>
                    <br></br>
                    > Anudeep.interests
                    <br></br>
                    <font class="Output">—> [“Coding”, “Basketball”, “Nature”, “Hiking”, “Gaming”, “Music”]</font>
                    <br></br>
                    <br></br>
                    > Anudeep.techicalSkills
                    <br></br>
                    <font class="Output">—> [“Java”, “C”, “Python”, “HTML/CSS”, “Data Structures and Algorithms”, “Machine Learning”]</font>
                    <br></br>
                    <br></br>
                    > Anudeep.latestWorkExperience
                    <br></br>
                    <font class="Output">—> Company: “Google”
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp; Role: “STEP Intern”
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp; When: “Present”
                    <br></br>&nbsp;&nbsp;&nbsp;&nbsp; Where: “San Francisco Bay Area”</font>
                    <br></br>
                    <br></br>
                    > Anudeep.resume
                    <br></br>
                    <font class="Output">—></font> <Link to={{pathname: '/resume'}}><font class="Link">“resume.pdf”</font>
                    </Link>
                    <br></br>
                    <br></br>
                    > Anudeep.email
                    <br></br>
                    <font class="Output">—></font> 
                    <a href="mailto:anudeep.yakkala27@gmail.com"><font class="Link">“anudeep.yakkala27@gmail.com”</font></a>
                    <br></br>
                    <br></br>
                    > Anudeep.github
                    <br></br>
                    <font class="Output">—></font>
                    <a href="http://www.github.com/AnudeepYakkala"><font class="Link">“github.com/AnudeepYakkala”</font></a>
                    <br></br>
                    <br></br>
                    > Anudeep.linkedIn
                    <br></br>
                    <font class="Output">—></font>
                    <a href="http://linkedin.com/in/ayakkala/"><font class="Link">“linkedin.com/in/ayakkala”</font></a>
                </div>
                <div className="footer"></div>
            </div>
        )
    }
}