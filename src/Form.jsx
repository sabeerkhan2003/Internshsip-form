import React, { useState } from "react";
import axios from "axios";
import Globe from "./components/ui/globe"; 


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    universityName: "",
    universityRegNumber: "",
    course: "",
    stream: "",
    semester: "",
    dob: "",
    gender: "",
    mobileNo: "",
    fatherNo: "",
    aadhar: null,
    domainsInterested: "",
    skillsKnown: "",
    resume: null,
    acknowledgement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:8081/formdetails', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Error submitting the form. Please try again.");
    }
  };

  return(
    
    <div className="max-w-4xl mx-auto p-8 lg:mb-10  ... shadow-lg lg:shadow-slate-50 rounded-lg lg:border-2">
      
          {/* <Globe className="w-[200px] h-[200px] absolute top-[60%]" /> */}
    
      <h1 className="lg:text-2xl text-[24px] font-bold mb-6  font-orbitron text-[#9DFF8E] tracking-widest ">INTERN REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name and Last Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-white font-orbitron tracking-wider text-lg">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-gray-300  px-2 rounded-md h-8 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className=" w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block  text-white font-orbitron tracking-wider text-lg">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* University Details */}
        <div>
          <label className="block text-white font-orbitron tracking-wider text-lg">University Name</label>
          <input
            type="text"
            name="universityName"
            value={formData.universityName}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block  text-white font-orbitron tracking-wider text-lg">University Register Number</label>
          <input
            type="text"
            name="universityRegNumber"
            value={formData.universityRegNumber}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Course and Stream */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Course</label>
            <input
              type="text"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Stream</label>
            <input
              type="text"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Semester */}
        <div>
          <label className="block  text-white font-orbitron tracking-wider text-lg">Semester</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg h-8 px-2  shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* DOB and Gender */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
           

          </div>
        </div>

        {/* Contact Numbers */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Mobile Number</label>
            <input
              type="text"
              name="mobileNo"
              value={formData.mobileNo}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg h-8 px-2  shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Father's Number</label>
            <input
              type="text"
              name="fatherNo"
              value={formData.fatherNo}
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            
            />
          </div>
        </div>

        {/* File Uploads */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Aadhar</label>
            <input
              type="file"
              name="aadhar"
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg shadow-sm px-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block  text-white font-orbitron tracking-wider text-lg">Resume (PDF)</label>
            <input
              type="file"
              name="resume"
              onChange={handleChange}
              className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Other Fields */}
        <div>
          <label className="block  text-white font-orbitron tracking-wider text-lg">Domains Interested</label>
          <input
            type="text"
            name="domainsInterested"
            value={formData.domainsInterested}
            onChange={handleChange}
            placeholder="FrontEnd,Game development ETC..."
            className="w-full border-gray-300 rounded-lg h-8 px-2  shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block  text-white font-orbitron tracking-wider text-lg">Skills Known</label>
          <input
            type="text"
            placeholder="HTML,CSS,REACT,UNITY,C# ETC..."
            name="skillsKnown"
            value={formData.skillsKnown}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-lg h-8 px-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Acknowledgement */}
        <div>
          <label className="block  text-white font-orbitron tracking-wider text-lg">
            <input
              type="checkbox"
              name="acknowledgement"
              checked={formData.acknowledgement}
              onChange={handleChange}
              className="w-4 h-4 mr-2"
              required
            />
            I acknowledge the terms and conditions
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-fit px-16  bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Form;
