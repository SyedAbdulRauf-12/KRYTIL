import React, { useState } from "react";
import "./Contact.css";
import msg_icon from "../../assets/mail-contact.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from '../../assets/white-arrow.png';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "92372b71-cf15-4393-b85f-c01c757e7c7f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you soon.");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again later.");
        console.log("Error", data);
      }
    } catch (error) {
      setResult("Network error. Please check your connection and try again.");
      console.log("Error", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: mail_icon,
      text: "hello@krytil.com",
      link: "mailto:hello@krytil.com"
    },
    {
      icon: phone_icon,
      text: "+91 96635 15839",
      link: "tel:+91 9663515839"
    },
    {
      icon: location_icon,
      text: "Bangalore, Karnataka",
      link: "https://maps.google.com/?q=Bangalore"
    }
  ];

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__container">
        {/* Header Section */}
        <div className={`contact__header ${inView ? 'is-visible' : ''}`}>
          <span className="contact__badge">Get In Touch</span>
          <h2 className="contact__title">
            Ready to Start Your <span className="gradient-text">Tech Journey</span>?
          </h2>
          <p className="contact__subtitle">
            Have questions about our programs? Our team is here to help you take the first step toward your dream tech career.
          </p>
        </div>

        <div className="contact__content">
          {/* Contact Information */}
          <div className={`contact__info ${inView ? 'is-visible' : ''}`}>
            <div className="contact__info-header">
              <div className="contact__info-icon">
                <img src={msg_icon} alt="Message icon" />
              </div>
              <h3>Let's Start a Conversation</h3>
            </div>
            
            <p className="contact__info-description">
              Feel free to reach out through our contact form or find our contact information below. 
              Your feedback, questions, and suggestions are important to us as we strive to provide 
              exceptional service to our learning community.
            </p>

            <div className="contact__details">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.link} 
                  className="contact__detail-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact__detail-icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="contact__additional">
              {/*<div className="contact__additional-item">
                <h4>Response Time</h4>
                <p>Within 24 hours</p>
              </div>*/}
              <div className="contact__additional-item">
                <h3>Office Hours: </h3>
                 <p>Mon - Fri: 24 x 7</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`contact__form-container ${inView ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={onSubmit} className="contact__form">
              <div className="form__group">
                <label htmlFor="name" className="form__label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form__input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="email" className="form__label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form__input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form__group">
                <label htmlFor="phone" className="form__label">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form__input"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="form__group">
                <label htmlFor="interest" className="form__label">
                  Subject
                </label>
                <select 
                  id="interest" 
                  name="interest" 
                  className="form__select"
                >
                  <option value="">Select </option>
                  <option value="ai-school">AI School</option>
                  <option value="full-stack">Partnership</option>
                  <option value="cybersecurity">General Inquiry</option>
                  <option value="cloud">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form__group">
                <label htmlFor="message" className="form__label">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form__textarea"
                  rows="6"
                  placeholder="Tell us about your goals and how we can help you..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`contact__submit-btn ${isSubmitting ? 'contact__submit-btn--loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <img src={white_arrow} alt="" className="btn__arrow" />
                  </>
                )}
              </button>

              {/* Result Message */}
              {result && (
                <div className={`form__result ${result.includes('successfully') ? 'form__result--success' : 'form__result--error'}`}>
                  {result}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;