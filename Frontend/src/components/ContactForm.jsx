// src/components/ContactForm.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Here you can send data to backend or handle it as needed
    toast.success('Message sent successfully!');
    reset(); // Clear form after submission
     setTimeout(() => {
    navigate('/'); // 👈 Redirect to home after 1 second
  }, 1000);
  };

  return (
    <div className="contact-form-container" style={{
      maxWidth: '500px',
      margin: '50px auto',
      padding: '30px',
      backgroundColor: '#1e1e2e',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      color: 'white'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your Name"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #444',
              backgroundColor: '#2d2d3a',
              color: 'white'
            }}
          />
          {errors.name && <p style={{ color: 'red', fontSize: '12px' }}>{errors.name.message}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
            placeholder="your@email.com"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #444',
              backgroundColor: '#2d2d3a',
              color: 'white'
            }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            rows="5"
            placeholder="Your message here..."
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #444',
              backgroundColor: '#2d2d3a',
              color: 'white'
            }}
          />
          {errors.message && <p style={{ color: 'red', fontSize: '12px' }}>{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#ff4081',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;