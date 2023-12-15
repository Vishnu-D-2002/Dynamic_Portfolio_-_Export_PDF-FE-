import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PersonalDetail = () => {
  const initialData = JSON.parse(sessionStorage.getItem('personalDetails')) || {
    fathersName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    nationality: '',
    languageProficiency: '',
    placeOfBirth: '',
  };

  const [formData, setFormData] = useState(initialData);

  const navigate = useNavigate();
  const fathersNameRef = useRef(null);

  useEffect(() => {
    // Set focus on the "Father's Name" input when the component mounts
    if (fathersNameRef.current) {
      fathersNameRef.current.focus();
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('personalDetails', JSON.stringify(formData));
  };

  const inputFields = [
    'Father\'s Name',
    'Date of Birth',
    'Gender',
    'Marital Status',
    'Nationality',
    'Language Proficiency',
    'Place of Birth',
  ];

  const maritalStatusOptions = ['Single', 'Married'];
  const genderOptions = ['Male', 'Female'];

  return (
    <form onSubmit={handleSubmit}>
      <h1>Personal Details</h1>
      {inputFields.map((field, index) => (
        <div key={index}>
          {index === 0 ? (
            <input
              ref={fathersNameRef}
              type="text"
              id={field.replace(/\s+/g, '')}
              name={field.replace(/\s+/g, '')}
              placeholder={field}
              value={formData[field.replace(/\s+/g, '')]}
              onChange={handleInputChange}
              required
            />
          ) : index === 1 ? (
            <>
              <label htmlFor={field.replace(/\s+/g, '')}>{field}</label>
              <input
                type="date"
                id={field.replace(/\s+/g, '')}
                name={field.replace(/\s+/g, '')}
                value={formData[field.replace(/\s+/g, '')]}
                onChange={handleInputChange}
                required
              />
            </>
          ) : index === 2 || index === 3 ? (
            <select
              id={field.replace(/\s+/g, '')}
              name={field.replace(/\s+/g, '')}
              value={formData[field.replace(/\s+/g, '')]}
              onChange={handleInputChange}
              required
            >
              <option value="">Select {field}</option>
              {index === 2
                ? genderOptions.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))
                : maritalStatusOptions.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
            </select>
          ) : (
            <input
              type="text"
              id={field.replace(/\s+/g, '')}
              name={field.replace(/\s+/g, '')}
              placeholder={field}
              value={formData[field.replace(/\s+/g, '')]}
              onChange={handleInputChange}
              required
            />
          )}
        </div>
      ))}
      <button onClick={() => navigate('/additional')}>Previous</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonalDetail;
