import React from 'react';
import './Temp2.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Temp2 = () => {
  const resumeData = {
    studentDetails: JSON.parse(sessionStorage.getItem('studentDetails')),
    educationDetails: JSON.parse(sessionStorage.getItem('educationDetails')),
    additionalDetails: JSON.parse(sessionStorage.getItem('additionalDetails')),
    personalDetails: JSON.parse(sessionStorage.getItem('personalDetails')),
  };

  const {
    studentDetails,
    educationDetails,
    additionalDetails,
    personalDetails,
  } = resumeData;

      const downloadPDF = () =>{
    const capture = document.querySelector('.resumecontainer');

    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('Resume.pdf');
    })
  }

  return (
    <div className="resumecontainer">
      <button onClick={downloadPDF}>Download</button>
      <div className="name">
        <b>{`${studentDetails.firstname} ${studentDetails.lastname}`}</b>
      </div>
      <div className="content">
        <div className="left">
          <img
            src="/images/CV-Template-01.jpg"
            width="150px"
            height="200px"
            alt="Profile"
          />
          <br />
          <br />
          <b>Mail Id:</b>
          <a href={`mailto:${studentDetails.email}`}>{studentDetails.email}</a>
          <br />
          <b>Contact:</b>
          <a href={`tel:${studentDetails.phonenumber}`}>
            {studentDetails.phonenumber}
          </a>
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
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index + 1}>
                {additionalDetails[`skills${index + 1}`]}
              </li>
            ))}
          </ul>
          <b>Interests:</b>
          <ul>
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index + 1}>
                {additionalDetails[`areaOfInterest${index + 1}`]}
              </li>
            ))}
          </ul>
        </div>

        <div className="right">
          <b>Education:</b>
          <br />
          <h2>{educationDetails.college.collegeName}</h2>
          <h3>
            {educationDetails.college.qualification} -{' '}
            {educationDetails.college.cgpa} -{' '}
            {educationDetails.college.passedOutYear}
          </h3>
          <h2>HSC:</h2>
          <h3>
            {educationDetails.twelfth.schoolName} -{' '}
            {educationDetails.twelfth.board} -{' '}
            {educationDetails.twelfth.percentage} -{' '}
            {educationDetails.twelfth.passedOutYear}
          </h3>
          <h2>SSLC:</h2>
          <h3>
            {educationDetails.tenth.schoolName} -{' '}
            {educationDetails.tenth.board} -{' '}
            {educationDetails.tenth.percentage} -{' '}
            {educationDetails.tenth.passedOutYear}
          </h3>
          <b>Projects:</b>
          <ul>
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index + 1}>
                <h2>{additionalDetails[`projectTitle${index + 1}`]}</h2>
                <p>{additionalDetails[`projectDescription${index + 1}`]}</p>
              </li>
            ))}
          </ul>
          <h3>Tools used:</h3>
          <p>{additionalDetails.toolsUsed}</p>
          <b>Certification:</b>
          <h3>{additionalDetails.certification}</h3>
        </div>
      </div>
    </div>
  );
};

export default Temp2;
