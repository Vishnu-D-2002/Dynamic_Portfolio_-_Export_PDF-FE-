import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const initialData = JSON.parse(sessionStorage.getItem('educationDetails')) || {
    college: { collegeName: '', qualification: '', cgpa: '', passedOutYear: '' },
    twelfth: { schoolName: '', board: '', percentage: '', passedOutYear: '' },
    tenth: { schoolName: '', board: '', percentage: '', passedOutYear: '' },
  };

  const [educationDetails, setEducationDetails] = useState(initialData);
  const navigate = useNavigate();
  const collegeRef = useRef(null);

  useEffect(() => {
    if (collegeRef.current) {
      collegeRef.current.focus();
    }
  }, []);

 const handleInputChange = (section, field, value) => {
  let validatedValue = value;

  if ((field === 'cgpa' || field === 'percentage' || field === 'passedOutYear') && value.length > 0) {
    if ((field === 'cgpa' || field === 'percentage') && !/^\d{0,2}$/.test(value)) {
      return;
    }

    if (field === 'passedOutYear' && !/^\d{0,4}$/.test(value)) {
      return;
    }

    validatedValue = value.slice(0, field === 'percentage' ? 2 : 4);
  }

  setEducationDetails((prevDetails) => ({
    ...prevDetails,
    [section]: { ...prevDetails[section], [field]: validatedValue },
  }));
};


  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('educationDetails', JSON.stringify(educationDetails));
    navigate('/additional');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>College Details</h1>
        {Object.entries(educationDetails.college).map(([field, value], index) => (
          <input
            key={index}
            type={field === 'cgpa' || field === 'percentage' || field === 'passedOutYear' ? 'number' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={value}
            onChange={(e) => handleInputChange('college', field, e.target.value)}
            required
            ref={index === 0 ? collegeRef : null}
          />
        ))}
      </div>

      <div>
        <h1>12th Grade Details</h1>
        {Object.entries(educationDetails.twelfth).map(([field, value], index) => (
          <input
            key={index}
            type={field === 'percentage' || field === 'passedOutYear' ? 'number' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={value}
            onChange={(e) => handleInputChange('twelfth', field, e.target.value)}
            required
          />
        ))}
      </div>

      <div>
        <h1>10th Grade Details</h1>
        {Object.entries(educationDetails.tenth).map(([field, value], index) => (
          <input
            key={index}
            type={field === 'percentage' || field === 'passedOutYear' ? 'number' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={value}
            onChange={(e) => handleInputChange('tenth', field, e.target.value)}
            required
          />
        ))}
      </div>
      <button onClick={() => navigate('/student')}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Education;
