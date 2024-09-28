//Contact.js, Adam La Selva, 301488626, and 2024-09-27
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
    const navigate = useNavigate();
//  manages form state with the useState hook
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: '',
    });
// handels input changes and updating the state
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    //  handels form submission and navigation
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);

        // sends the user back to the homepage after submiting
        navigate('/');
    };

    return (
        // HTML section for contact page
        <div style={{ padding: '20px' }}  id="contact">
          
            <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h2>Contact Information</h2>
                <p>Email: 4d4m2003@gmail.com</p>
                <p>Phone: (905) 299 2789</p>
                <p>Location: Acton Ontario Canada</p>
            </div>

            {/* contact information section / block*/}
            <form onSubmit={handleSubmit}>
                <h2>Send a Message</h2>
                <div>
                    <label>First Name:</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Contact Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Contact;
