import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Pencil, Trash } from 'lucide-react';
import { deleteStudent } from '../Redux/Feature/AddstudentSlice';
import { useNavigate } from 'react-router';



const StdRecord = () => {

  const reduxStdData = useSelector((state) => (state.studentReducer.students));
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const stdDelete = (stdID) => {
    dispatch(deleteStudent(stdID))

  }

  const handleEdit  = (item)=>{
    navigate(`/addStudent/${item.id}`)
  }


  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email </th>
            <th>Course</th>
            <th>Branch</th>
            <th>Gender</th>
            <th>Contact No</th>
          </tr>
        </thead>

        {reduxStdData.map((stdData, index) => (
          <tbody key={index} className=''>
            <tr  className='border-2 border-blue-950'>
              <th>{stdData.id}</th>
              <td>{stdData.FirstName}</td>
              <td>{stdData.email}</td>
              <td>{stdData.coursename}</td>
              <td>{stdData.campus}</td>
              <td>{stdData.Gender}</td>
              <td>{stdData.contact}</td>
              <td>
                <div className="flex gap-2">

                  <button onClick={ ()=> {handleEdit(stdData)}}
                    className="p-2 rounded-lg bg-blue-500 text-white shadow-sm 
  hover:bg-blue-600 hover:scale-110 hover:shadow-md 
  active:scale-95 transition duration-200">
                    <Pencil size={16} />
                  </button>

                  <button onClick={ ()=> stdDelete(stdData.id)}
                    className="p-2 rounded-lg bg-red-500 text-white shadow-sm 
  hover:bg-red-600 hover:scale-110 hover:shadow-md 
  active:scale-95 transition duration-200">
                    <Trash size={16} />
                  </button>

                </div>
              </td>
            </tr>
          </tbody>

        ))}


      </table>
    </div>
  )
}

export default StdRecord