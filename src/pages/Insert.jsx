import React, { useState } from 'react';
import '../style/style.css'

const Insert = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            name: Name,
            email: Email,
            password: Password,
         
          }
        
        // Prevent default form submission
        // Here you can handle form data submission, like sending it to an API
       try{
        const response = await fetch( "https://672c5df21600dda5a9f827cb.mockapi.io/register",{

            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData), 
        })
        if (!response.ok) {
            throw new Error('Failed to insert data');
        }

        const data = await response.json();
        console.log('Data inserted successfully:', data);

        // Simple alert for successful insertion
        alert('Data inserted successfully!');
    
        
       } catch (error) {
        console.error('Error inserting data:', error);
    }
  
    }
   




  return (
    <div>
       <form onSubmit={handleSubmit} className="registration-form">
            <h2>Register</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e) =>  setName(e.target.value)}
                 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
  
                    onChange={(e) =>  setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) =>  setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Register</button>
        </form> 
    </div>
  )
}

export default Insert
