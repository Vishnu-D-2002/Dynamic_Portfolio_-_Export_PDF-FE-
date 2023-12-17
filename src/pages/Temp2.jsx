import React from 'react';
import './Temp2.css';

const Temp2 = () => {
  const resumeData = {
    studentDetails: JSON.parse(sessionStorage.getItem('studentDetails')),
    educationDetails: JSON.parse(sessionStorage.getItem('educationDetails')),
    additionalDetails: JSON.parse(sessionStorage.getItem('additionalDetails')),
    personalDetails: JSON.parse(sessionStorage.getItem('personalDetails')),
  };

  const { studentDetails, educationDetails, additionalDetails, personalDetails } = resumeData;

  return (
    <div>
      <div className="name">
        <b>{`${studentDetails.firstname} ${studentDetails.lastname}`}</b>
      </div>
      <div className="content">
        <div className="left">
          <img src="/images/CV-Template-01.jpg" width="150px" height="200px" alt="Profile" />
          <br />
          <br />
          <b>Mail Id:</b>
          <a href={`mailto:${studentDetails.email}`}>{studentDetails.email}</a>
          <br />
          <b>Contact:</b>
          <a href={`tel:${studentDetails.phonenumber}`}>{studentDetails.phonenumber}</a>
          <div>
            <b id="ad">Address:</b>
            <address className="is">{studentDetails.address}</address>
          </div>
          <b>LinkedIn ID:</b>
          <br />
          <a href={studentDetails.linkedin}>{studentDetails.linkedin}</a>
          <br />
          <b>Objective:</b>
          <p className="is">{additionalDetails.careerObjective}</p>
          <b>Personal Details:</b>
          <p>Date of Birth: {personalDetails.DateofBirth}</p>
          <p>Gender: {personalDetails.Gender}</p>
          <p>Father's Name: {personalDetails["Father'sName"]}</p>
          <p>Language Proficiency: {personalDetails.LanguageProficiency}</p>
          <p>Marital Status: {personalDetails.MaritalStatus}</p>
          <p>Nationality: {personalDetails.Nationality}</p>
          <p>Native Place: {personalDetails.NativePlace}</p>
          <b>Skills:</b>
          <ul>
            <li>{additionalDetails.skills1}</li>
            <li>{additionalDetails.skills2}</li>
            {/* Add the rest of the skills */}
          </ul>
          <b>Interests:</b>
          <ul>
            <li>{additionalDetails.areaOfInterest1}</li>
            <li>{additionalDetails.areaOfInterest2}</li>
            {/* Add the rest of the interests */}
          </ul>
        </div>

        <div className="right">
          <b>Education:</b><br />
          <h2>{educationDetails.college.collegeName}</h2>
          <h3>{educationDetails.college.qualification} - {educationDetails.college.cgpa} - {educationDetails.college.passedOutYear}</h3>
          <h2>HSC:</h2>
          <h3>{educationDetails.twelfth.schoolName} - {educationDetails.twelfth.board} - {educationDetails.twelfth.percentage} - {educationDetails.twelfth.passedOutYear}</h3>
          <h2>SSLC:</h2>
          <h3>{educationDetails.tenth.schoolName} - {educationDetails.tenth.board} - {educationDetails.tenth.percentage} - {educationDetails.tenth.passedOutYear}</h3>
          <b>Projects:</b>
          <h2>Smart solution for Railways</h2>
          <p>{additionalDetails.projectDescription}</p>
          <h3>Tools used:</h3>
          <p>{additionalDetails.toolsUsed}</p>
          <b>Certification:</b>
          <h3>{additionalDetails.certification}</h3>
          <b>Webinar:</b>
          <p>
            <ul>
              <li>Webinar on “Reliability Science & Technology” on {additionalDetails.webinarDate1} at {additionalDetails.webinarLocation1}.</li>
              <li>Webinar on “Real Time Information” on {additionalDetails.webinarDate2} at {additionalDetails.webinarLocation2}.</li>
            </ul>
          </p>
          <b>Internship Trainings:</b>
          <p>
            <ul>
              <li>Internship Training on “IoT” on {additionalDetails.internshipDate1} at {additionalDetails.internshipLocation1}.</li>
              <li>Internship Training on “Embedded System” on {additionalDetails.internshipDate2} to {additionalDetails.internshipDate3} at {additionalDetails.internshipLocation2}.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temp2;
