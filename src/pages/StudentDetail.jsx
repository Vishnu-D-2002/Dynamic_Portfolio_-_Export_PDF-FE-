import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDetails = () => {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    address: '',
    github: '',
    linkedin: '',
    facebook: '',
    instagram: '',
    twitter: '',
  });

  const placeholder = [
    'First Name *',
    'Last Name *',
    'Email *',
    'Phone Number *',
    'Address *',
    'Github',
    'Linked In',
    'Facebook',
    'Instagram',
    'Twitter'
  ];

  const navigate = useNavigate(); // Move useNavigate to the top level

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are not empty
    const requiredFields = Object.keys(inputs).slice(0, 5);
    const hasEmptyRequiredFields = requiredFields.some(field => !inputs[field]);

    if (hasEmptyRequiredFields) {
      alert('Please fill in all required fields.');
    } else {
      sessionStorage.setItem('studentDetails', JSON.stringify(inputs));
      navigate('/education'); // Use navigate here
    }
  };

  return (
    <div>
      <h1> Student Details</h1>
      <form onSubmit={handleSubmit}>
        {Object.keys(inputs).map((inputName, index) => (
          <div key={index}>
            <input
              type="text"
              id={inputName}
              name={inputName}
              placeholder={placeholder[index]}
              value={inputs[inputName]}
              onChange={handleInputChange}
              required={index < 5}
            />
          </div>
        ))}
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default StudentDetails;
