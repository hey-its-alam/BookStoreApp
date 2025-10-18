import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import { toast } from 'react-hot-toast';

import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Signup = () => {
  const location =useLocation();
  const navigate=useNavigate();
  const from=location.state?.from?.pathname || "/";
  // ✅ corrected line - properly initialize useForm
  const { register, handleSubmit, formState: { errors } } = useForm();

  // ✅ corrected line - handle submitted data
  const onSubmit = async(data) => {
    const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password,
    
    }
  await  axios.post("http://localhost:4001/user/signup",userInfo)
  .then((res)=>{
    console.log(res.data)
    if(res.data){
      toast.success(' SignUp Successfully ');
      navigate(from,{replace:true});
      
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user))

  }).catch((err)=>{
    if(err.response){
      console.log(err);
     toast.error("Error:"+err.response.data.message);
    }
  })
  };

  return (
    <>
      <div className='flex justify-center items-center h-screen'>
        <div className="border-[2px] shadow-md rounded-md p-6">
          <div>
            {/* ✅ corrected line - attach handleSubmit to actual form */}
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>

              {/* close button */}
              <div className='w-full flex justify-end'>
                <Link to="/" className="btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
              </div>

              <h3 className="font-bold text-lg mb-4">Sign Up</h3>

              {/* name field */}
              <div className='mt-2 space-y-2 py-1'>
                <span>Name</span><br />
                {/* ✅ corrected line - added react-hook-form register + validation */}
                <input
                  type="text"
                  placeholder="Enter your name here"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("fullname", { required: "Name is required" })}
                />
                {/* ✅ show error */}
                {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>}
              </div>

              {/* email field */}
              <div className='mt-2 space-y-2 py-1'>
                <span>Email</span><br />
                {/* ✅ corrected line - added register + pattern validation */}
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* password field */}
              <div className='mt-2 space-y-2 py-1'>
                <span>Password</span><br />
                {/* ✅ corrected line - added register + length validation */}
                <input
                  type="password"
                  placeholder="Enter your password here"
                  className="w-80 px-3 border rounded-md outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                  })}
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
              </div>

              {/* button */}
              <div className='flex justify-around mt-4 w-full'>
                {/* ✅ corrected line - changed to type="submit" */}
                <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Sign Up
                </button>
                <p>
                  Have an account?{" "}
                  <button
                    type="button"
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;











// import React from 'react';
// import { Link } from 'react-router-dom';
// import Login from './Login';
// import { useForm } from "react-hook-form";
// import axios from 'axios'; // ✅ Fixed spelling: 'axios', not 'axois'

// const Signup = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//     };
//     try {
//       const res = await axios.post("http://localhost:4001/user/signup", data);
//       console.log("Signup success:", res.data);
//       alert("Signup successful");
//     } catch (err) {
//       // Show backend error message if available
//       const errorMessage = err.response?.data?.message || "Signup failed. Please try again.";
//       console.error("Signup error:", errorMessage);
//       alert(errorMessage);
//     }
//   };

//   return (
//     <>
//       <div className='flex justify-center items-center h-screen'>
//         <div className="border-[2px] shadow-md rounded-md p-6">
//           <div>
//             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
//               {/* Close button */}
//               <div className='w-full flex justify-end'>
//                 <Link to="/" className="btn btn-sm btn-circle btn-ghost right-2 top-2">✕</Link>
//               </div>

//               <h3 className="font-bold text-lg mb-4">Sign Up</h3>

//               {/* Name field */}
//               <div className='mt-2 space-y-2 py-1'>
//                 <span>Name</span><br />
//                 <input
//                   type="text"
//                   placeholder="Enter your name here"
//                   className="w-80 px-3 border rounded-md outline-none"
//                   {...register("fullname", { required: "Name is required" })}
//                 />
//                 {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname.message}</p>} {/* ✅ Fixed: was 'errors.name' */}
//               </div>

//               {/* Email field */}
//               <div className='mt-2 space-y-2 py-1'>
//                 <span>Email</span><br />
//                 <input
//                   type="email"
//                   placeholder="Enter your email here"
//                   className="w-80 px-3 border rounded-md outline-none"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//                       message: "Invalid email address",
//                     },
//                   })}
//                 />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//               </div>

//               {/* Password field */}
//               <div className='mt-2 space-y-2 py-1'>
//                 <span>Password</span><br />
//                 <input
//                   type="password"
//                   placeholder="Enter your password here"
//                   className="w-80 px-3 border rounded-md outline-none"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: { value: 6, message: "Password must be at least 6 characters" },
//                   })}
//                 />
//                 {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
//               </div>

//               {/* Buttons */}
//               <div className='flex flex-col items-center mt-4 w-full'>
//                 <button
//                   type="submit"
//                   className='bg-pink-500 text-white rounded-md px-6 py-2 mb-3 hover:bg-pink-700 duration-200 w-80'
//                 >
//                   Sign Up
//                 </button>
//                 <p>
//                   Have an account?{" "}
//                   <button
//                     type="button"
//                     className='underline text-blue-500 cursor-pointer'
//                     onClick={() => {
//                       const modal = document.getElementById("my_modal_3");
//                       if (modal && modal.showModal) modal.showModal();
//                     }}
//                   >
//                     Login
//                   </button>
//                 </p>
//                 <Login />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;