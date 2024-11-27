import React, { useState } from 'react';
import {Form} from 'react-router-dom';

export const signupData=async({request})=>{

     try{
      const res= await request.formData();
      const data=Object.fromEntries(res);
      console.log(data);
      return null;

     }
     catch(e){
      console.log(e);
     }
}

export const Signup = () => {
   const [formData, setFormData] = useState({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      password: '',
      confirmPassword: '',
      terms: false
    });
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value
      });
    };
  
    const handleSubmit = (e) => {
      
      // Handle form submission logic here
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      if (!formData.terms) {
        alert("You must accept the terms and conditions!");
        return;
      }
      alert('Form submitted:', formData);
    };
  
    return (
      <div className="flex items-center font-mono justify-center min-h-screen bg-gray-100">
        <Form
          method='post'
          action='/Signup'
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-lg my-10 px-8 transition duration-400 text-lg shadow-md  max-w-4xl w-2/3 hover:shadow-2xl"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Sign Up</h2>
          
          
          <div className="mb-4  flex flex-col  md:flex-row md:items-center md:justify-left   md:mb-8">
                <label className="block md:text-nowrap text-xl md:text-center  text-gray-700 mb-2 md:mb-0 md:mr-2  md:w-1/4 md:tracking-tighter" htmlFor="firstName">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full md:w-1/4 p-1 border outline-none mb-4 md:mb-0 md:mr-6  border-gray-400 hover:border-gray-700 hover:shadow-md border-gray-300 rounded"
                    required
                />


                <label className="block text-nowrap text-gray-700 mb-2 md:text-center md:mr-2 md:mb-0 text-lg  md:w-1/4 md:tracking-tighter" htmlFor="middleName">
                    Middle Name
                </label>
                <input
                    type="text"
                    name="middleName"
                    id="middleName"
                    value={formData.middleName}
                    onChange={handleChange}
                    className="w-full md:w-1/4 p-1 border outline-none mb-4 md:mb-0 border-gray-400 hover:border-gray-700 hover:shadow-md border-gray-300 rounded"
                    required
                />



</div>
<div className="mb-4  flex flex-col  md:flex-row md:items-center md:justify-left   md:mb-10">

<label className=" text-gray-700 block md:text-center mb-2 md:mb-0 md:mr-4 md:w-1/4" htmlFor="lastName">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full md:w-1/3 md:max-w-md p-1 border outline-none hover:border-gray-700 hover:shadow-md border-gray-300 rounded"
                    required
                />
</div>

<div className="mb-4  flex flex-col md:gap-1 md:flex-row md:items-center md:justify-left  md:mb-10">
                <label className="block text-xl md:text-center  text-gray-700 mb-2 md:mb-0 md:mr-2  md:w-1/3 md:tracking-tighter" htmlFor="email">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full md:w-1/3 p-1 border outline-none mb-4 md:mb-0 md:mr-6  border-gray-400 hover:border-gray-700 hover:shadow-md border-gray-300 rounded"
                    required
                />


                <label className="block text-gray-700 mb-2 md:text-center md:mr-2 md:mb-0 text-lg  md:w-1/3 md:tracking-tighter" htmlFor="contactNumber">
                    Contact Number
                </label>
                <input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="w-full md:w-1/3 p-1 border outline-none mb-4 md:mb-0 border-gray-400 hover:border-gray-700 hover:shadow-md border-gray-300 rounded"
                    required
                />

</div>

          
<div className="mb-4  flex flex-col md:gap-1 md:flex-row md:items-center md:justify-left  md:mb-10">
                <label className="block text-xl md:text-center  text-gray-700 mb-2 md:mb-0 md:mr-2  md:w-1/3 md:tracking-tighter" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full md:w-1/3 p-1 border outline-none mb-4 md:mb-0 md:mr-6  border-gray-400 hover:border-gray-700 hover:shadow-md border-gray-300 rounded"
                    required
                />


                <label className="block text-gray-700 mb-2 md:text-center md:mr-2 md:mb-0 text-lg  md:w-1/3 md:tracking-tighter" htmlFor="confirmPassword">
                    Confirm Password
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full md:w-1/3 p-1 border outline-none mb-4 md:mb-0 border-gray-400 hover:border-gray-700 hover:shadow-md border-gray-300 rounded"
                    required
                />

</div>

  
          
 
          {/* Terms and Conditions */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="terms"
              id="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-3"
              required
            />
            <label htmlFor="terms" className="text-gray-700 text-wrap tracking-tighter leading-tight">
              I accept the terms and conditions
            </label>
          </div>
  
          <button
            type="submit"
            className="w-full md:p-3 justify-center items-center  tracking-widest bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 hover:text-white transition duration-200 focus:outline-none"
          >
            Create Account
          </button>
        </Form>
      </div>
    );
  };
  
  
  