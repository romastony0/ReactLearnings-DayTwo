import React from "react";

function Contact() {
  return (
    <div className="container">
      <div>
        <h2>Contact Us:</h2>
        <p>We would love to hear from you! If you have any questions, feedback, or inquiries, please don't hesitate to get in touch with us.</p>
        <h3>Address:</h3>
        <p>
          Ro Cafe
          <br />
          No: 1234, Near Bharathiar University,
          <br />
          Marudhamalai, Coimbatore, Tamil Nadu,
          <br />
          India
        </p>
        <h3>Phone:</h3>
        <p>+91 7639549436</p>
        <h3>Email:</h3>
        <p>info@rocafe.com</p>
        <h3>Opening Hours:</h3>
        <p>
          Monday to Saturday: 8:00 AM - 10:00 PM
          <br />
          Sunday: 9:00 AM - 8:00 PM
        </p>
        <h3>Follow Us:</h3>
        <p>Stay connected with us on social media:</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/rocafe" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/rocafe" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/rocafe" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
