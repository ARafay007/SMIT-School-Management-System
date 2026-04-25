import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addStudents, updateStudent } from "../Redux/Feature/AddstudentSlice";


const AddStudents = () => {
  const [Studentdata, setStudent] = useState({
    FirstName: '',
    lastName: '',
    dob: '',
    Gender: '',
    contact: '',
    CINC: '',
    email: '',
    religion: '',
    coursename: '',
    campus: '',
    Current_Address: '',
    postal: '',
    id: '',
  })

  const { id } = useParams(); 
  const dispatch = useDispatch();

  const { students } = useSelector(state => state.studentReducer);

  useEffect(() => {
    console.log(id);

    if(id){
      const editStd = students.find((stdObj) => {
        if(stdObj.id == id){
          return stdObj;
        }
      });
      setStudent(editStd);
    }
  }, []);

  const onhandlestudentdata = (evt, propertyname) => {
    setStudent((pervstate) => ({ ...pervstate, [propertyname]: evt.target.value }))
  }

  const formSubmit = (evt) => {
    evt.preventDefault();
    if (id) {
      dispatch(updateStudent(Studentdata));
    } else {
      dispatch(addStudents({
        ...Studentdata,
        id: Date.now()
      }))
    }
  }

  return (
    <div className='borde2 m-4 bg-[#f8f8f8] rounded' >

      <h1 className="text-xl uppercase font-medium py-6 px-4">
        { id ? 'Edit Admission Foam' : 'Admission Foam'}
      </h1>

      <form action="" className="grid grid-cols-4 gap-4 px-4" onSubmit={formSubmit}>

        <div className="" >
          <label htmlFor="" className="font-semibold">First Name</label>
          <input value={Studentdata.FirstName} onChange={(evt) => { onhandlestudentdata(evt, 'FirstName') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div>
          <label htmlFor="" className="font-semibold">Last Name</label>
          <input value={Studentdata.lastName}
            onChange={(evt) => { onhandlestudentdata(evt, 'lastName') }} className="bg-white p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
        </div>
        <div>
          <label htmlFor="" className="font-semibold">Date of Birth</label>
          <input value={Studentdata.dob}
            onChange={(evt) => { onhandlestudentdata(evt, 'dob') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="" type="date" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Gender</label>
          <input value={Studentdata.Gender} onChange={(evt) => { onhandlestudentdata(evt, 'Gender') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Male/Female" type="text" />
        </div>
        <div>
          <label htmlFor="phone" className="font-semibold"  >Contact No:</label>
          <input value={Studentdata.contact} onChange={(evt) => { onhandlestudentdata(evt, 'contact') }}

            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="+92-" type="tel" id="phone" name="phone" />
        </div>

        <div className="" >
          <label htmlFor="" className="font-semibold">CINC No:</label>
          <input value={Studentdata.CINC} onChange={(evt) => { onhandlestudentdata(evt, 'CINC') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="41303-1586080-9" type="number" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Email Address:</label>
          <input value={Studentdata.email} onChange={(evt) => { onhandlestudentdata(evt, 'email') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="email" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Religion</label>
          <input value={Studentdata.religion} onChange={(evt) => { onhandlestudentdata(evt, 'religion') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="Islam" type="text" />
        </div>

        <div>
          <label className="font-semibold">Course Name:</label>

          <select value={Studentdata.coursename}
            onChange={(evt) => { onhandlestudentdata(evt, 'coursename') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1">
            <option
              value="">Select Course</option>
            <option value="web">Web Development</option>
            <option value="app">App Development</option>
            <option value="graphic">Graphic Design</option>
            <option value="ai">AI / Machine Learning</option>
          </select>
        </div>
        <div>
          <label className="font-semibold">Campus/Branch</label>

          <select value={Studentdata.campus}
            onChange={(evt) => { onhandlestudentdata(evt, 'campus') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1">
            <option
              value="">Select Campus</option>
            <option value="auto">Auto Ban</option>
            <option value="sadar">Sadar</option>
            <option value="sarfarz">Sarfarz Colony</option>
          </select>
        </div>

        <div className="" >
          <label htmlFor="" className="font-semibold">Current Address:</label>
          <input value={Studentdata.Current_Address} onChange={(evt) => { onhandlestudentdata(evt, 'Current_Address') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="house.no-7" type="text" />
        </div>
        <div className="" >
          <label htmlFor="" className="font-semibold">Postal Code:</label>
          <input value={Studentdata.postal} onChange={(evt) => { onhandlestudentdata(evt, 'postal') }}
            className="p-2 rounded outline-none border-2 border-gray-300 w-full my-1" placeholder="71000" type="number" />
        </div>

        <button className="active:scale-95 transition-all hover:bg-blue-600 text-white text-lg w-1/3 my-3 py-2 rounded bg-blue-500">
          {id ? "Update" : "Submit"}
        </button>
      </form>

    </div>

  )
}

export default AddStudents