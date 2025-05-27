// LeadForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './LeadForm.css';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState({ message: '', error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ message: '', error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ message: 'Please enter a valid name and email.', error: true });
      return;
    }

    try {
      const response = await axios.post("https://lead-generation-system-99se.onrender.com/api/leads", formData);
      setStatus({ message: response.data.message, error: false });
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus({ message: 'Server error.', error: true });
    }
  };

  return (
    <div className="form-container">
      <h2>Lead Generation Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name *</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} rows="3" />
        </div>
        <button type="submit">Submit</button>
        {status.message && (
          <div className={status.error ? 'error-message' : 'success-message'}>
            {status.message}
          </div>
        )}
      </form>
    </div>
  );
};

export default LeadForm;
