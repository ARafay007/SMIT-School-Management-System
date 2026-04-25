import { Link } from "react-router";


const CreateAccountPage = () => {

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-1/3 rounded-2xl p-12 text-black bg-[#F8F8F8] border-2 border-gray-200 ">
        <div className="space-y-2 mb-8 text-center">
          <h1 className="text-black font-semibold text-3xl">Create Account</h1>
          <p className="text-gray-400 text-lg">Sign up  to get Started</p>
        </div>
        <form action="" className="">
          <div className="my-5 ">
            {/* <label htmlFor="" className="font-semibold">Email</label> */}
            <input className="p-3 rounded-xl outline-none border-2 border-gray-300 w-full my-1" placeholder="First Name" type="text" />
          </div>
          <div className="my-5 ">
            {/* <label htmlFor="" className="font-semibold">Email</label> */}
            <input className="p-3 rounded-xl outline-none border-2 border-gray-300 w-full my-1" placeholder="Last Name" type="text" />
          </div>
          <div className="my-5 ">
            {/* <label htmlFor="" className="font-semibold">Email</label> */}
            <input className="p-3 rounded-xl outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your email" type="text" />
          </div>
          <div>
            {/* <label htmlFor="" className="font-semibold">Password</label> */}
            <input className="p-3 rounded-xl outline-none border-2 border-gray-300 w-full my-1" placeholder="Enter your Password" type="text" />

          </div>
          {/* <div className="flex justify-between my-4">
            <div className="flex gap-1">
              <input type="checkbox" name="" id="" />
              <p className="font-semibold">Remember me</p>

            </div>
            <p><a className="text-blue-400" href="">Forgot Password</a></p>
          </div> */}

          <button className="bg-blue-500 text-white text-lg font-semibold py-3 rounded-xl  w-full my-6">Create Account</button>
          {/* <div className=" flex justify-center items-center gap-2 border-2 border-gray-300  text-black text-lg py-3 rounded-xl font-normal w-full my-3">
            <img src="../public/google.png" className="w-6" alt="" />
            <button >Login  With Google</button>
          </div> */}
          <p className="text-center  text-gray-400">Allready have an account? <Link to='/login' className="text-blue-500">Login</Link></p>

        </form>


      </div>
    </div>
  )
}

export default CreateAccountPage