import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { protectInstance } from '../services/instance';

const PersonalDetails = () => {
  const initialData = JSON.parse(sessionStorage.getItem('personalDetails')) || {
    fathersName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    languageProficiency: '',
    placeOfBirth: '',
  };

  const [personalInputs, setPersonalInputs] = useState(initialData);

  const fathersNameRef = useRef(null);

  useEffect(() => {
    if (fathersNameRef.current) {
      fathersNameRef.current.focus();
    }
  }, []);

  const personalDetailsPlaceholder = [
    'Father\'s Name *',
    'Date of Birth *',
    'Gender *',
    'Marital Status *',
    'Nationality *',
    'Language Proficiency *',
    'Native Place *',
  ];

  const navigate = useNavigate();

  const handlePersonalInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handlePersonalSubmit = async (e) => {
    e.preventDefault();

    const requiredFields = Object.keys(personalInputs);
    const hasEmptyRequiredFields = requiredFields.some(field => !personalInputs[field]);

    if (hasEmptyRequiredFields) {
      alert('Please fill in all required fields.');
    } else {
      sessionStorage.setItem('personalDetails', JSON.stringify(personalInputs));
      navigate('/templates');
      const resumeData = {
      studentDetails: JSON.parse(sessionStorage.getItem('studentDetails')),
      educationDetails: JSON.parse(sessionStorage.getItem('educationDetails')),
      additionalDetails: JSON.parse(sessionStorage.getItem('additionalDetails')),
      personalDetails: JSON.parse(sessionStorage.getItem('personalDetails')),
    }
    console.log(resumeData);
    try {
    const res = await protectInstance.post('/resume/resume-model',  resumeData );

    if (res.data) {
      console.log('Data posted successfully');
    } else {
      console.log('Error in data posting');
    }
  } catch (error) {
    console.error('Error in POST request:', error.message);
  }
    }
  };

  return (
    <div>
      <form onSubmit={handlePersonalSubmit}>
        <h1>Personal Details</h1>
        {Object.keys(personalInputs).map((inputName, index) => (
          <div key={index}>
            {inputName === 'dob' && <label htmlFor={inputName}>{personalDetailsPlaceholder[index]}</label>}
            {inputName === 'dob' ? (
              <input
                type="date"
                id={inputName}
                name={inputName}
                value={personalInputs[inputName]}
                onChange={handlePersonalInputChange}
                required
              />
            ) : inputName === 'gender' ? (
              <select
                id={inputName}
                name={inputName}
                value={personalInputs[inputName]}
                onChange={handlePersonalInputChange}
                required
              >
                <option value="" disabled>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : inputName === 'maritalStatus' ? (
              <select
                id={inputName}
                name={inputName}
                value={personalInputs[inputName]}
                onChange={handlePersonalInputChange}
                required
              >
                <option value="" disabled>Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
              </select>
            ) : (
              <input
                type="text"
                id={inputName}
                name={inputName}
                placeholder={personalDetailsPlaceholder[index]}
                value={personalInputs[inputName]}
                onChange={handlePersonalInputChange}
                required
                ref={index === 0 ? fathersNameRef : null}
              />
            )}
          </div>
        ))}
        <button onClick={() => navigate('/additional')}>Previous</button>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
