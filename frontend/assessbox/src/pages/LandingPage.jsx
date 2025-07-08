import React, { useState } from "react";

import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import Modal from "../components/Loader/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";

function LandingPage() {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <>
      <div className="w-full min-h-full relative bg-[#FFFCEF]">
         <div className="absolute top-0 left-0 w-[500px] h-[500px] z-0">
          <div className="w-full h-full bg-amber-200/20 blur-[65px] rounded-full"></div>
        </div>


          <div className="container mx-auto px-[10vw] pt-6 pb-[200px] relative z-10">
            <header className="flex justify-between items-center mb-16">
              <div className="text-xl text-black font-bold">assessBOX</div>
              <button
                className="bg-gradient-to-r from-[#ff9324] to-[#e99a4b] text-sm font-semibold text-white px-7 py-2.5 rounded-full hover:text-white border border-white transition-colors cursor-pointer "
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            </header>

            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
                <h1 className="text-5xl text-black font-medium mb-6 leading-tight">
                  Ace Interviews with <br />{" "}
                  <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#ff9324_0%,_#fcd760_100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                  Learning
                </h1>
              </div>
            

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 mr-0 md:mr-20 mb-6">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Provident nobis laborum libero, possimus veniam, ea pariatur
                dolor voluptas, saepe dolores molestiae quia!
              </p>
              <button
                className="bg-black text-sm font-semibold text-white py-2.5 px-5 rounded-full hover:text-gray-400 border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
              </div>
            </div>
          </div>
        {/* </div> */}
      </div>

      <Modal isOpen={openAuthModal} onClose={()=>{
        setOpenAuthModal(false);
        setCurrentPage("login");
      }}
      hideHeader
      currentPage={currentPage}
      >
        <div className="h-full">
          {
            currentPage==="login" && (
              <Login setCurrentPage={setCurrentPage} />
            )
          }
          {
            currentPage==="signup" && (
              <SignUp setCurrentPage={setCurrentPage} />
            )
          }
        </div>

      </Modal>



    </>
  );
}

export default LandingPage;
