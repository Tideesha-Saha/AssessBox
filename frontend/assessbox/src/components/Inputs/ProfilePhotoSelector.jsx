import React, { useRef, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { MdEdit } from "react-icons/md";

function ProfilePhotoSelector({ image, setImage, preview, setPreview }) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      //Update image state
      setImage(file);

      // Generate preview URL from the file

      const preview = URL.createObjectURL(file);
      if (setPreview) {
        setPreview(preview);
      }
      setPreviewUrl(preview);
    }
  };

  const handleRemoveImage = (event) => {
    setImage(null);
    setPreviewUrl(null);
    if (setPreview) setPreview(null);
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center my-6">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
        <div className="w-30 h-30 flex justify-center items-center bg-blue-100 rounded-full relative lg:w-40 lg:h-40">
          <FaUserAlt size={30}/>

          <button type="button" className="bg-blue-900 rounded-full p-2 text-white absolute bottom-0 right-0 cursor-pointer" onClick={onChooseFile}>
            <MdUpload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img src={preview || previewUrl} alt="profile Photo" className="w-40 h-40 rounded-full object-cover" />

          <button type="button" className="bg-blue-900 rounded-full p-2 text-white absolute bottom-0 right-0 cursor-pointer" onClick={handleRemoveImage}><LuTrash2/></button>
        </div>
      )}
    </div>
  );
}

export default ProfilePhotoSelector;
