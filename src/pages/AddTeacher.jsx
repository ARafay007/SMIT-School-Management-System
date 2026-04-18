
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addStudent, updateStudent, deleteStudent } from '../redux/slices/studentsSlice';
import { useState, useRef } from 'react';

const AddTeacher = () => {

  const teacherReducer = useSelector((state) => state.studentReducer);

  console.log(teacherReducer);

  const [teacherData, setTeacherData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    teacherId: '',
    department: '',
    subject: '',
    qualification: '',
    experience: '',
    joiningDate: '',
    salary: '',
    status: ''
  });

  const qualificationRef = useRef('');

  const dispatch = useDispatch();

  const onHandleTeacherData = (event, propertyName) => {

    setTeacherData((prevState) => ({...prevState, [propertyName]: event.target.value }));

    // setTeacherData((prevState) => {
    //   console.log(prevState);
    //   return { ...prevState, [propertyName]: event.target.value };
    // });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log('Form submit');

    // const teacherData = {
    //   qualification: qualificationRef.current.value
    // };

    dispatch(addStudent(teacherData));
  };

    return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">

      <h1 className="text-3xl font-bold mb-6 uppercase">
        Add Teacher
      </h1>

      <form className="w-full max-w-5xl bg-base-200 p-6 rounded-lg shadow-lg" onSubmit={onFormSubmit}>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-black">

          {/* PERSONAL INFO */}
          <input 
            type="text" 
            placeholder="Full Name" 
            className="input input-bordered w-full" 
            onChange={(event) => {onHandleTeacherData(event, 'fullName')}} 
          />
          
          <input type="date" className="input input-bordered w-full" onChange={(event) => {onHandleTeacherData(event, 'dob')}} />

          <select className="select select-bordered w-full">
            <option disabled selected>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input 
            type="email" 
            placeholder="Email Address" 
            className="input input-bordered w-full" 
            onChange={(event) => {onHandleTeacherData(event, 'email')}}  
          />
          
          <input 
            type="tel" 
            placeholder="Phone Number" 
            className="input input-bordered w-full" 
            onChange={(event) => {onHandleTeacherData(event, 'phone')}}
          />
          
          <input 
            type="text" 
            placeholder="Address" 
            className="input input-bordered w-full"
            onChange={(event) => {onHandleTeacherData(event, 'address')}}
          />
          
          <input 
           type="text" 
           placeholder="Subject " 
           className="input input-bordered w-full" 
           onChange={(event) => {onHandleTeacherData(event, 'subject')}}
          />

          <input 
            type="text" 
            placeholder="Qualification" 
            className="input input-bordered w-full" 
            ref={qualificationRef}
          />
          
          {/* <input type="number" placeholder="Years of Experience" className="input input-bordered w-full" />
          
          <input type="date" className="input input-bordered w-full" />

          <input type="number" placeholder="Salary" className="input input-bordered w-full" />
          
          <select className="select select-bordered w-full">
            <option disabled selected>Status</option>
            <option>Active</option>
            <option>On Leave</option>
            <option>Resigned</option>
          </select> */}

        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button className="btn btn-primary mt-8 w-60">
            Add Teacher
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddTeacher;