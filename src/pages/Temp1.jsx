// Temp1.js

import React from 'react';
import './Temp1.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Temp1 = () => {
  const resumeData = JSON.parse(sessionStorage.getItem('resumeData'));

  const {
    studentDetails,
    educationDetails,
    additionalDetails,
    personalDetails,
    experience,
  } = resumeData;

  const downloadPDF = () => {
    const capture = document.querySelector('.resume-container');

    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('Resume.pdf');
    });
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download</button>
      <div id='box'>
        <div className="resume-container">
          <div id='top-center'>
            <strong className='underline top'>
              {studentDetails.firstname} {studentDetails.lastname}
            </strong>
            <a className='top' href={`mailto:${studentDetails.email}`}>
              {studentDetails.email}
            </a>
            <p className='underline top'>{studentDetails.phonenumber}</p>
          </div>

          <div className="left-side">
            <div className="section">
              <h2 className='underline'>Career Objective: </h2>
              <p>{additionalDetails.careerObjective}</p>

              <h2 className='underline'>Contact Details:</h2>
              {Object.keys(studentDetails).map((key, index) => (
                // Check if the value is not empty before rendering
                studentDetails[key].trim() !== '' && (
                  <p key={index}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {studentDetails[key]}
                  </p>
                )
              ))}
            </div>

            <div className="section">
              <h2 className='underline'>Personal Details:</h2>
              <p>Date of Birth: {personalDetails.dob}</p>
              <p>Father's Name: {personalDetails.fathersName}</p>
              <p>Gender: {personalDetails.gender}</p>
              <p>Language Proficiency: {personalDetails.languageProficiency}</p>
              <p>Marital Status: {personalDetails.maritalStatus}</p>
              <p>Nationality: {personalDetails.nationality}</p>
              <p>Native Place: {personalDetails.placeOfBirth}</p>
            </div>

            <div className="section">
              <h2 className='underline'>Skills:</h2>
              <ul className="detail-list">
                {Object.keys(additionalDetails)
                  .filter((key) => key.startsWith('skills') && additionalDetails[key].trim() !== '')
                  .map((key) => (
                    <li key={key}>{additionalDetails[key]}</li>
                  ))}
              </ul>

              <h2 className='underline'>Personal Skills:</h2>
              <ul className="detail-list">
                {Object.keys(additionalDetails)
                  .filter(
                    (key) =>
                      key.startsWith('personalSkill') && additionalDetails[key].trim() !== ''
                  )
                  .map((key) => (
                    <li key={key}>{additionalDetails[key]}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="right-side">
            <div className="section">
              <h2 className='underline'>Education Details:</h2>
              <h2>{educationDetails.college.qualification}</h2>
              <h3> {educationDetails.college.collegeName}</h3>
              <h3>{educationDetails.college.cgpa}% - {educationDetails.college.passedOutYear}</h3>

              <h2>SSLC - {educationDetails.tenth.schoolName}</h2>
              <h3>{educationDetails.tenth.board}</h3>
              <h3>{educationDetails.tenth.percentage}% - {educationDetails.tenth.passedOutYear}</h3>

              <h2>HSC - {educationDetails.twelfth.schoolName}</h2>
              <h3>{educationDetails.twelfth.board}</h3>
              <h3>{educationDetails.twelfth.percentage}% - {educationDetails.twelfth.passedOutYear}</h3>
            </div>

            <div className="section">
              {experience.experiences.some(exp => exp.title.trim() !== '' || exp.description.trim() !== '') && (
                <h2 className='underline'>Experience:</h2>
              )}

              {experience.experiences.map((exp, index) => (
                <div key={index}>
                  <h2>{exp.title}</h2>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>

            <div className="section">
              <h2 className='underline'>Hobbies:</h2>
              <ul>
                {experience.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby.name}</li>
                ))}
              </ul>
            </div>

            <div className="section">
              {experience.experiences.some(exp => exp.title.trim() !== '' || exp.description.trim() !== '') && (
                <h2 className='underline'>Projects:</h2>
              )}

              {experience.projects.map((project, index) => (
                <div key={index}>
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                </div>
              ))}

              <h2 className='underline'>Area of Interest:</h2>
              <ul className="detail-list">
                {Object.keys(additionalDetails)
                  .filter(
                    (key) =>
                      key.startsWith('areaOfInterest') && additionalDetails[key].trim() !== ''
                  )
                  .map((key) => (
                    <li key={key}>{additionalDetails[key]}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp1;
