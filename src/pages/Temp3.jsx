import React, { useState } from 'react';
import './Temp3.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const Temp3 = () => {
  const [userImage, setUserImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUserImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const resumeData = JSON.parse(sessionStorage.getItem('resumeData'));

  const {
    studentDetails,
    educationDetails,
    additionalDetails,
    personalDetails,
    experience,
  } = resumeData;

  const downloadPDF = () => {
    const capture = document.querySelector('.resume-container3');

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
      <h2>If you want Image in your resume Please upload the Image in below input box </h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      
      <button onClick={downloadPDF}>Download</button>
      <div id='box3'>
        <div className="resume-container3">

          <div className="left-side3">
            
            <div id='top-center3'>
            {userImage && <img src={userImage} alt="Uploaded" width={130} height={130} id='img3' />}
            <strong className='underline3 top3'>
              {studentDetails.firstname} {studentDetails.lastname}
            </strong>
            <a className='top3' href={`mailto:${studentDetails.email}`}>
              {studentDetails.email}
            </a>
            <p className='underline3 top3' id='phone3'>{studentDetails.phonenumber}</p>
            </div>
            
            <div className="section3">
              <h2 className='underline3'>Career Objective: </h2>
              <p className='line-height3'>{additionalDetails.careerObjective}</p><hr />

              <h2 className='underline3'>Contact Details:</h2>
              {Object.keys(studentDetails).map((key, index) => (
                // Check if the value is not empty before rendering
                studentDetails[key].trim() !== '' && (
                  <p key={index}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {studentDetails[key]}
                  </p>
                )
              ))}
            </div><hr />

            <div className="section3">
              <h2 className='underline3'>Personal Details:</h2>
              <p>Date of Birth: {personalDetails.dob}</p>
              <p>Father's Name: {personalDetails.fathersName}</p>
              <p>Gender: {personalDetails.gender}</p>
              <p>Language Proficiency: {personalDetails.languageProficiency}</p>
              <p>Marital Status: {personalDetails.maritalStatus}</p>
              <p>Nationality: {personalDetails.nationality}</p>
              <p>Native Place: {personalDetails.placeOfBirth}</p>
            </div><hr />

            <div className="section3">
              <h2 className='underline3'>Skills:</h2>
              <ul className="detail-list3">
                {Object.keys(additionalDetails)
                  .filter((key) => key.startsWith('skills') && additionalDetails[key].trim() !== '')
                  .map((key) => (
                    <li key={key} className='line-height3'>{additionalDetails[key]}</li>
                  ))}
              </ul><hr />

              <h2 className='underline3'>Personal Skills:</h2>
              <ul className="detail-list3">
                {Object.keys(additionalDetails)
                  .filter(
                    (key) =>
                      key.startsWith('personalSkill') && additionalDetails[key].trim() !== ''
                  )
                  .map((key) => (
                    <li key={key} className='line-height3'>{additionalDetails[key]}</li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="right-side3">
            <div className="section3">
              <h2 className='underline3'>Education Details:</h2>
              <h2 className='head-left3'>{educationDetails.college.qualification}</h2>
              <h3 className='black3'> {educationDetails.college.collegeName}</h3>
              <h3 className='black3'>{educationDetails.college.cgpa}% - {educationDetails.college.passedOutYear}</h3>

              <h2 className='head-left3'>SSLC - {educationDetails.tenth.board}</h2>
              <h3 className='black3'> {educationDetails.tenth.schoolName}</h3>
              <h3 className='black3'>{educationDetails.tenth.percentage}% - {educationDetails.tenth.passedOutYear}</h3>

              <h2 className='head-left3'>HSC - {educationDetails.twelfth.board}</h2>
              <h3 className='black3'>{educationDetails.twelfth.schoolName}</h3>
              <h3 className='black3'>{educationDetails.twelfth.percentage}% - {educationDetails.twelfth.passedOutYear}</h3>
            </div><hr />

           
            <div className="section3">
              {experience.experiences.some(exp => exp.title.trim() !== '' || exp.description.trim() !== '') && (
                <h2 className='underline3'>Projects:</h2>
              )}

              {experience.projects.map((project, index) => (
                <div key={index}>
                  <h2 className='head-left3'>{project.title}</h2>
                  <p id='project3' className='line-height3'>{project.description}</p>
                </div>
              ))}<hr />

               <div className="section3">
              {experience.experiences.some(exp => exp.title.trim() !== '' || exp.description.trim() !== '') && (
                <h2 className='underline3'>Experience:</h2>
              )}

              {experience.experiences.map((exp, index) => (
                <div key={index}>
                  <h2 className='head-left3'>{exp.title}</h2>
                  <p id='experience3' className='line-height3'>{exp.description}</p>
                </div>
              ))}
            </div><hr />

            <div className="section3">
              <h2 className='underline3'>Hobbies:</h2>
              <ul>
                {experience.hobbies.map((hobby, index) => (
                  <li key={index} className='line-height3'>{hobby.name}</li>
                ))}
              </ul>
            </div><hr />

              <h2 className='underline3'>Area of Interest:</h2>
              <ul className="detail-list3">
                {Object.keys(additionalDetails)
                  .filter(
                    (key) =>
                      key.startsWith('areaOfInterest') && additionalDetails[key].trim() !== ''
                  )
                  .map((key) => (
                    <li key={key} className='line-height3'>{additionalDetails[key]}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp3;
