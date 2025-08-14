import { Asterisk, Eraser, Sparkles } from "lucide-react";
import React, { useState } from "react";

const RemoveBackground = () => {
  const [input, setInput] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Image</p>

        <div className="flex items-center gap-3 my-3">
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setInput(e.target.files[0])}
            required
          />

          <label
            htmlFor="fileInput"
            className="px-4 py-2 text-white bg-gradient-to-r from-orange-400 to-red-500 
               rounded-lg shadow-md hover:from-orange-500 hover:to-red-600 
               cursor-pointer transition-all duration-200 transform hover:scale-105"
          >
            Choose File
          </label>

          <span className="text-sm text-gray-500">
            {input ? (
              input.name
            ) : (
              <div className="flex items-center gap-1">
                <span>
                  <Asterisk className="text-red-600 w-3 h-3 mb-2" />
                </span>{" "}
                {"No file chosen"}
              </div>
            )}
          </span>
        </div>

        <p className="font-light mt-1 text-gray-500 text-xs flex items-center">
          Supports JPG, PNG, and other image formats
        </p>

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F6AB41] to-[#FF4938] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Eraser className="w-5" />
          Remove Background
        </button>
      </form>

      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 ">
        <div className="flex items-center gap-3">
          <Eraser className="w-5 h-5 text-[#FF4938]" />
          <h1 className="text-xl font-semibold">Proccessed Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
            <Eraser className="w-9 h-9" />
            <p>Upload an image and click "Remove Background" to get started.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;
