import React from 'react';

const Temp1 = () => {
  const resumeData = JSON.parse(sessionStorage.getItem('resumeData'));

  const {
    studentDetails,
    educationDetails,
    additionalDetails,
    personalDetails,
    experience,
  } = resumeData;

  return (
    <div>
      {/* Education Details */}
      <h2>Education Details:</h2>
      <p>College Name: {educationDetails.college.collegeName}</p>
      <p>Qualification: {educationDetails.college.qualification}</p>
      <p>CGPA: {educationDetails.college.cgpa}</p>
      <p>Passed Out Year: {educationDetails.college.passedOutYear}</p>

      <p>Tenth School Name: {educationDetails.tenth.schoolName}</p>
      <p>Board: {educationDetails.tenth.board}</p>
      <p>Percentage: {educationDetails.tenth.percentage}</p>
      <p>Passed Out Year: {educationDetails.tenth.passedOutYear}</p>

      <p>Twelfth School Name: {educationDetails.twelfth.schoolName}</p>
      <p>Board: {educationDetails.twelfth.board}</p>
      <p>Percentage: {educationDetails.twelfth.percentage}</p>
      <p>Passed Out Year: {educationDetails.twelfth.passedOutYear}</p>

      {/* Personal Details */}
      <h2>Personal Details:</h2>
      <p>Date of Birth: {personalDetails.dob}</p>
      <p>Father's Name: {personalDetails.fathersName}</p>
      <p>Gender: {personalDetails.gender}</p>
      <p>Language Proficiency: {personalDetails.languageProficiency}</p>
      <p>Marital Status: {personalDetails.maritalStatus}</p>
      <p>Nationality: {personalDetails.nationality}</p>
      <p>Place of Birth: {personalDetails.placeOfBirth}</p>

      {/* Student Details */}
      <h2>Student Details:</h2>
      <ul>
        {Object.keys(studentDetails).map((key, index) => (
          <li key={index}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {studentDetails[key]}
          </li>
        ))}
      </ul>
      
      {/* Additional Details */}
      <h2>Additional Details:</h2>
      <p>Area of Interest:</p>
      <ul>
        {Object.keys(additionalDetails)
          .filter(key => key.startsWith('areaOfInterest') && additionalDetails[key].trim() !== '')
          .map(key => (
            <li key={key}>{additionalDetails[key]}</li>
          ))}
      </ul>
      <p>Career Objective: {additionalDetails.careerObjective}</p>

      {/* Skills */}
      <h3>Skills:</h3>
      <ul>
        {Object.keys(additionalDetails)
          .filter(key => key.startsWith('skills') && additionalDetails[key].trim() !== '')
          .map(key => (
            <li key={key}>{additionalDetails[key]}</li>
          ))}
      </ul>

      {/* Personal Skills */}
      <h3>Personal Skills:</h3>
      <ul>
        {Object.keys(additionalDetails)
          .filter(key => key.startsWith('personalSkill') && additionalDetails[key].trim() !== '')
          .map(key => (
            <li key={key}>{additionalDetails[key]}</li>
          ))}
      </ul>

      {/* Experience */}
      <h2>Experience:</h2>
      {experience.experiences.map((exp, index) => (
        <div key={index}>
          <p>Title: {exp.title}</p>
          <p>Description: {exp.description}</p>
        </div>
      ))}

      {/* Hobbies */}
      <h2>Hobbies:</h2>
      {experience.hobbies.map((hobby, index) => (
        <p key={index}>Hobby {index + 1}: {hobby.name}</p>
      ))}

      {/* Projects */}
      <h2>Projects:</h2>
      {experience.projects.map((project, index) => (
        <div key={index}>
          <p>Title: {project.title}</p>
          <p>Description: {project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Temp1;
