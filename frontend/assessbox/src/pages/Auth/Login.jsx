import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';

function Login({setCurrentPage}) {
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setError]= useState(null);
  const navigate=useNavigate();

  const handleLogin=async(e)=>{
    e.preventDefault();

    if(!validateEmail(email)){
      setError("Please enter a valid email.");
      return;
    }
    if(!password){
      setError("Please enter the password");
      return;
    }
    setError("");
    try{

    }catch(error){
      if(error.response && error.response.data.message){
        setError(error.response.data.message);
      }else{
        setError("Something went wrong. Please try again.")
      }
    }
  }

  return (
    <div className='min-h-full p-8 flex flex-col justify-center bg-blue-50 '>
      <h3 className='mb-1 text-4xl font-bold md:text-3xl'>Welcome Back!</h3>
      <p className='text-xs font-light text-gray-400 md:text-xs'>Please enter your credentials </p>
      <form onSubmit={handleLogin}>
        <Input value={email} onChange={({target}) => setEmail(target.value)}
        label="Email Address"
        placeholder="john@email.com"
        type="text" 
        className="sm:text-xl"
        />

        <Input value={password} onChange={({target}) => setPassword(target.value)}
        label="Password"
        placeholder="demo1234"
        type="password"/>

        {error && <p className="text-xs text-red-500 mt-4">{error}</p>}

        <div className="flex flex-col justify-centre items-center">
        <button type="submit" className='bg-blue-900 text-white w-7/10 rounded-xl my-5 py-1 text-center hover:bg-blue-700/75 cursor-pointer transition-transform hover:scale-105'>LOG IN</button>

        <p className="">
          Don't Have an account? {" "}
          <button 
          className='cursor-pointer text-blue-800 underline'
          onClick={()=>setCurrentPage("signup")}>
            Sign Up
          </button>
        </p>

        </div>

      </form>
    </div>
    
  )
}

export default Login