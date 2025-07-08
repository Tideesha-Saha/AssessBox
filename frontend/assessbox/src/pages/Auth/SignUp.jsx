import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from '../../utils/helper';

function SignUp({ setCurrentPage }) {
  const [profilePic, setProfilePic] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    let profileImageUrl="";

     if(!fullName){
       setError("Please enter full name.");
       return;
     }

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
  };

  return (
    <div className="min-h-full p-8 flex flex-col justify-center bg-blue-50 ">
      <h3 className="mb-1 text-4xl font-bold md:text-3xl">Create an Account</h3>
      <p className="text-xs font-light text-gray-400 md:text-xs">
        Join us today by entering your details below.
      </p>
      <form onSubmit={handleSignUp}>
        <div className="flex justify-evenly items-center gap-5">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />

          <div className="">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
              className="sm:text-xl"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@email.com"
              type="text"
              className="sm:text-xl"
            />

            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="demo1234"
              type="password"
            />
           {error && <p className="text-xs text-red-500 mt-4">{error}</p>}
          </div>

        </div>

        <div className="flex flex-col justify-centre items-center mt-5">
          <button
            type="submit"
            className="bg-blue-900 text-white w-7/10 rounded-xl my-5 py-1 text-center hover:bg-blue-700/75 cursor-pointer transition-transform hover:scale-105"
          >
            Sign Up
          </button>

          <p className="">
            Already have an account?{" "}
            <button
              className="cursor-pointer text-blue-800 underline"
              onClick={() => setCurrentPage("login")}
            >
              Log In
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
