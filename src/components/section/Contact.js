import React, { useState } from 'react';
import axios from 'axios';
import { contact, section5Title, social } from '../../profile';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    Email: '',
    Subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://formspree.io/f/mwkdkywy', formData);
      alert('Email sent successfully');
      clearForm();
    } catch (error) {
      console.log(error);
      alert('Failed to send email');
    }
  };

  const clearForm = () => {
    setFormData({ firstname: '', Email: '', Subject: '', message: '' });
  };

  return (
    <div className="parallax">
      <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
        <>
          <div className="git-head-div text-center mx-auto">
            <h1 id="Contact" className="git-head">
              {section5Title}
            </h1>
          </div>
        </>
        <div className="container">
          <div className="git-cont row">
            <div className="col-12 col-sm-6 half">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  id="mailid"
                  name="Email"
                  placeholder="Email Address"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="sub"
                  name="Subject"
                  placeholder="Subject"
                  value={formData.Subject}
                  onChange={handleChange}
                  required
                />
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button style={{ cursor: 'pointer' }} type="submit">
                  Send Message
                </button>
              </form>
            </div>
            <div className="col-12 col-sm-6 half">
              <p className="lead">{contact.pitch}</p>
              <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                  {social.linkedin && (
                    <a
                      title="Visit Linkedin profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.linkedin}
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  )}
                  {social.facebook && (
                    <a
                      title="Visit Facebok profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.facebook}
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  )}
                  {social.twitter && (
                    <a
                      title="Visit Twitter profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.twitter}
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                  )}
                  {social.instagram && (
                    <a
                      title="Visit Instagram profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.instagram}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  )}
                  {social.github && (
                    <a
                      title="Visit Github profile"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.github}
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  <br />
                </div>
                {social.resume && (
                  <a title="Download Resume" href={social.resume} download>
                    <i className="fas fa-download"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p id="not-dark" className="Copy">
        2020 © Copyright
        <strong>{contact.copyright}</strong>. All Rights Reserved
      </p>
    </div>
  );
};

export default Contact;
