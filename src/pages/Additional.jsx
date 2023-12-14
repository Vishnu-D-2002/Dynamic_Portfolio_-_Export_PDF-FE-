import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Additional = () => {
  const [formData, setFormData] = useState({
    skills1: '',
    skills2: '',
    skills3: '',
    skills4: '',
    skills5: '',
    areaOfInterest1: '',
    areaOfInterest2: '',
    areaOfInterest3: '',
    areaOfInterest4: '',
    areaOfInterest5: '',
    careerObjective: '',
    personalSkill1: '',
    personalSkill2: '',
    personalSkill3: '',
    personalSkill4: '',
    personalSkill5: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem('additionalDetails', JSON.stringify(formData));
    navigate('/personal');
  };

  return (
    <form onSubmit={handleSubmit}>
      {['skills', 'areaOfInterest', 'personalSkill'].map((category) => (
        [...Array(5)].map((_, index) => (
          <div key={index}>
            <label htmlFor={`${category}${index + 1}`}>{`${category.charAt(0).toUpperCase()}${category.slice(1)} ${index + 1} ${index < 2 ? '*' : ''}`}</label>
            <input
              type="text"
              id={`${category}${index + 1}`}
              name={`${category}${index + 1}`}
              // placeholder={`${category.charAt(0).toUpperCase()}${category.slice(1)} ${index + 1}`}
              value={formData[`${category}${index + 1}`]}
              onChange={handleInputChange}
              required={index < 2}
            />
          </div>
        ))
      ))}

      <div>
        <label htmlFor='careerObjective'>Career Objective *</label>
        <input
          type="text"
          id="careerObjective"
          name="careerObjective"
          value={formData.careerObjective}
          onChange={handleInputChange}
          required
        />
      </div>
      <button onClick={()=>navigate('/education')}>Previous</button>
      <button type="submit">Next</button>
    </form>
  );
};

export default Additional;
