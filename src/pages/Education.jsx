import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const [educationDetails, setEducationDetails] = useState({
    college: { collegeName: '', qualification: '', cgpa: '', passedOutYear: '' },
    twelfth: { schoolName: '', board: '', percentage: '', passedOutYear: '' },
    tenth: { schoolName: '', board: '', percentage: '', passedOutYear: '' },
  });

  const navigate = useNavigate();

  const handleInputChange = (section, field, value) => {
    setEducationDetails((prevDetails) => ({
      ...prevDetails,
      [section]: { ...prevDetails[section], [field]: value },
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
        <h2>College Details</h2>
        {Object.entries(educationDetails.college).map(([field, value], index) => (
          <input
            key={index}
            type={field === 'cgpa' || field === 'percentage' || field=== 'passedOutYear' ? 'number' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={value}
            onChange={(e) => handleInputChange('college', field, e.target.value)}
            required
          />
        ))}
      </div>

      <div>
        <h2>12th Grade Details</h2>
        {Object.entries(educationDetails.twelfth).map(([field, value], index) => (
          <input
            key={index}
            type={field === 'percentage' ? 'number' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={value}
            onChange={(e) => handleInputChange('twelfth', field, e.target.value)}
            required
          />
        ))}
      </div>

      <div>
        <h2>10th Grade Details</h2>
        {Object.entries(educationDetails.tenth).map(([field, value], index) => (
          <input
            key={index}
            type={field === 'percentage' ? 'number' : 'text'}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={value}
            onChange={(e) => handleInputChange('tenth', field, e.target.value)}
            required
          />
        ))}
      </div>
      <button onClick={()=>navigate('/student')}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Education;
