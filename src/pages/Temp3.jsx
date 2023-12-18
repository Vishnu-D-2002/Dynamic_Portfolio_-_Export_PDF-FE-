
import React from 'react';
import './Temp2.css';

const Resume = () => {
 return (
    <div>
      {/* Education Details */}
      <h2>Education Details:</h2>
      <p>College Name: {details.educationDetails.college.collegeName}</p>
      <p>Qualification: {details.educationDetails.college.qualification}</p>
      <p>CGPA: {details.educationDetails.college.cgpa}</p>
      <p>Passed Out Year: {details.educationDetails.college.passedOutYear}</p>

      <p>Tenth School Name: {details.educationDetails.tenth.schoolName}</p>
      <p>Board: {details.educationDetails.tenth.board}</p>
      <p>Percentage: {details.educationDetails.tenth.percentage}</p>
      <p>Passed Out Year: {details.educationDetails.tenth.passedOutYear}</p>

      <p>Twelfth School Name: {details.educationDetails.twelfth.schoolName}</p>
      <p>Board: {details.educationDetails.twelfth.board}</p>
      <p>Percentage: {details.educationDetails.twelfth.percentage}</p>
      <p>Passed Out Year: {details.educationDetails.twelfth.passedOutYear}</p>

      {/* Personal Details */}
      <h2>Personal Details:</h2>
      <p>Date of Birth: {details.personalDetails.DateofBirth}</p>
      <p>Father's Name: {details.personalDetails["Father'sName"]}</p>
      <p>Gender: {details.personalDetails.Gender}</p>
      <p>Language Proficiency: {details.personalDetails.LanguageProficiency}</p>
      <p>Marital Status: {details.personalDetails.MaritalStatus}</p>
      <p>Nationality: {details.personalDetails.Nationality}</p>
      <p>Native Place: {details.personalDetails.NativePlace}</p>

      {/* Student Details */}
      <h2>Student Details:</h2>
      <p>Address: {details.studentDetails.address}</p>
      <p>Email: {details.studentDetails.email}</p>
      <p>First Name: {details.studentDetails.firstname}</p>
      <p>Last Name: {details.studentDetails.lastname}</p>
      <p>Phone Number: {details.studentDetails.phonenumber}</p>
      <p>Github: {details.studentDetails.github}</p>

      {/* Additional Details */}
      <h2>Additional Details:</h2>
      <p>Area of Interest 1: {details.additionalDetails.areaOfInterest1}</p>
      <p>Area of Interest 2: {details.additionalDetails.areaOfInterest2}</p>
      {/* ... repeat for other areas of interest */}
      
      <p>Career Objective: {details.additionalDetails.careerObjective}</p>

      {/* Skills */}
      <h3>Skills:</h3>
      {Object.values(details.additionalDetails)
        .filter(value => value.startsWith('skills'))
        .map((skill, index) => (
          <p key={index}>Skill {index + 1}: {skill}</p>
        ))}

      {/* Personal Skills */}
      <h3>Personal Skills:</h3>
      {Object.values(details.additionalDetails)
        .filter(value => value.startsWith('personalSkill'))
        .map((personalSkill, index) => (
          <p key={index}>Personal Skill {index + 1}: {personalSkill}</p>
        ))}
    </div>
  );
};

export default Resume;

