import React from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch('https://b-esby.onrender.com/webhook-test/b3d3d773-b52e-448c-8beb-0b6c4643c186', {
        method: 'POST',
        body: data,
      });
      navigate('/thank-you');
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Submission failed. Please try again.');
    }
  };

  return (
    <form id="myForm" onSubmit={handleSubmit}>
      <label>Name: <input type="text" name="name" required /></label><br />
      <label>Email: <input type="email" name="email" required /></label><br />
      <label>Phone: <input type="tel" name="phone" required /></label><br />
      <label>Address: <input type="text" name="address" required /></label><br />
      <label>Date of Birth: <input type="date" name="dob" required /></label><br />
      <label>Message: <textarea name="message"></textarea></label><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
