import React from "react";

const Modal = ({ children, isOpen, onClose, title, hideHeader, currentPage }) => {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black/40 ">
      <div className="relative bg-white rounded-lg flex flex-col gap-[1vw] justify-between p-2 min-w-[50vmax] max-h-[85vh] overflow-y-auto md:flex-row-reverse min-h-[70vh] md:max-w-[70vw]">
        {!hideHeader && (
          <div className="relative flex items-center justify-between p-4 border-b border-gray-400  mb-4">
            <h3 className="">{title}</h3>
          </div>
        )}


        {/* image */}
        {
        currentPage==="login" && (
        <div className="w-full md:w-1/2">
        
              <img
                src="assets/login2.jpg"
                alt="Login"
                className="w-full h-52 md:h-full object-cover rounded-tr-lg md:rounded-tr-none md:rounded-br-lg "
              />
          </div>
          )
        } 
        {/* {  
          currentPage==="signup" && (
              <img
                src="assets/signup.jpg"
                alt="Login"
                className="w-full h-52 md:h-full object-cover rounded-tr-lg md:rounded-tr-none md:rounded-br-lg "
              />
          )
        } */}
        
        
        {
          currentPage==="login" &&
          (<div className="w-full md:w-1/2">
            {children}
          </div>)
        }
        {
          currentPage==="signup" &&
          <div className="w-full">
            {children}
          </div>
        }

       {/* login or signup page  */}
        

        {/* close button */}
        <button
          type="button"
          className="absolute top-1 right-1 bg-white p-1 pl-2 rounded-bl-2xl cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
