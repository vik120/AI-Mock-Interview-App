import React from "react";

export default function AddNewInterview() {
    return (
        <>
            <div className="max-w-md h-40 rounded-lg border-2 border-dashed flex items-center justify-center">
                <label htmlFor="file" className="cursor-pointer text-center p-4 md:p-8">

                    <p className="mt-3 text-gray-700 max-w-xs mx-auto">Click to <span className="font-medium text-indigo-600">Upload your  file</span> or drag and drop your file here</p>
                </label>
                <input id="file" type="file" className="hidden" />
            </div>
        </>
    )
}