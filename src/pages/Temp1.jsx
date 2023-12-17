import React from 'react';

const Temp1 = () => {

 const resumeData = {
      studentDetails: JSON.parse(sessionStorage.getItem('studentDetails')),
      educationDetails: JSON.parse(sessionStorage.getItem('educationDetails')),
      additionalDetails: JSON.parse(sessionStorage.getItem('additionalDetails')),
      personalDetails: JSON.parse(sessionStorage.getItem('personalDetails')),
    }
      const { studentDetails, educationDetails, additionalDetails, personalDetails } = resumeData;
  console.log(resumeData)
  return (
    <div style={styles.container}>
      {/* Left side: Personal Information */}
      <div style={styles.leftSide}>
        <h2 style={styles.sectionTitle}>Personal Information</h2>
        <p style={styles.item}>Date of Birth: {personalDetails.DateofBirth}</p>
        <p style={styles.item}>Father's Name: {personalDetails["Father'sName"]}</p>
        <p style={styles.item}>Gender: {personalDetails.Gender}</p>
        <p style={styles.item}>Language Proficiency: {personalDetails.LanguageProficiency}</p>
        <p style={styles.item}>Marital Status: {personalDetails.MaritalStatus}</p>
        <p style={styles.item}>Nationality: {personalDetails.Nationality}</p>
        <p style={styles.item}>Native Place: {personalDetails.NativePlace}</p>
      </div>

      {/* Right side: Resume Details */}
      <div style={styles.rightSide}>
        {/* Contact Details Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact Details</h2>
          <p style={styles.item}>Phone Number: {studentDetails.phonenumber}</p>
          <p style={styles.item}>Email: {studentDetails.email}</p>
          <p style={styles.item}>Address: {studentDetails.address}</p>
        </div>

        {/* Education Details Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Education Details</h2>
          <h3 style={styles.itemTitle}>Tenth</h3>
          <p style={styles.item}>School Name: {educationDetails.tenth.schoolName}</p>
          {/* Add more details for Tenth as needed */}
          
          <h3 style={styles.itemTitle}>Twelfth</h3>
          <p style={styles.item}>School Name: {educationDetails.twelfth.schoolName}</p>
          {/* Add more details for Twelfth as needed */}

          <h3 style={styles.itemTitle}>College</h3>
          <p style={styles.item}>College Name: {educationDetails.college.collegeName}</p>
          {/* Add more details for College as needed */}
        </div>

        {/* Skills Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <ul>
            <li style={styles.skill}>{additionalDetails.skills1}</li>
            <li style={styles.skill}>{additionalDetails.skills2}</li>
            {/* Add more skills as needed */}
          </ul>
        </div>

        {/* Areas of Interest Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Areas of Interest</h2>
          <ul>
            <li style={styles.interest}>{additionalDetails.areaOfInterest1}</li>
            <li style={styles.interest}>{additionalDetails.areaOfInterest2}</li>
            {/* Add more areas of interest as needed */}
          </ul>
        </div>

        {/* Career Objective Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Career Objective</h2>
          <p style={styles.item}>{additionalDetails.careerObjective}</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  leftSide: {
    flex: 1,
    marginRight: '20px',
  },
  rightSide: {
    flex: 2,
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  item: {
    marginBottom: '10px',
  },
  itemTitle: {
    marginBottom: '10px',
  },
  textInfo: {
    color: '#007BFF',
  },
  skill: {
    marginBottom: '5px',
    listStyleType: 'none',
  },
  interest: {
    marginBottom: '5px',
    listStyleType: 'none',
  },
};

export default Temp1;
