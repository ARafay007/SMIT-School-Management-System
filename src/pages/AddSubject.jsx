import React from 'react';
const AddSubject = () => {
    return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">

      <h1 className="text-3xl font-bold mb-6 uppercase">
        Add Subject
      </h1>

      <form className="w-full max-w-4xl bg-base-200 p-6 rounded-lg shadow-lg">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">

          {/* SUBJECT INFO */}
          <input
            type="text"
            placeholder="Subject Name (e.g. Mathematics)"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            placeholder="Subject Code (e.g. MATH101)"
            className="input input-bordered w-full"
          />

          <select className="select select-bordered w-full">
            <option disabled selected>Select Class / Grade</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
          </select>

          <select className="select select-bordered w-full">
            <option disabled selected>Assign Teacher</option>
            <option>Teacher 1</option>
            <option>Teacher 2</option>
            <option>Teacher 3</option>
          </select>

          <input
            type="number"
            placeholder="Credit Hours"
            className="input input-bordered w-full"
          />

          <select className="select select-bordered w-full">
            <option disabled selected>Subject Type</option>
            <option>Theory</option>
            <option>Practical</option>
          </select>

          {/* DESCRIPTION */}
          <textarea
            placeholder="Subject Description"
            className="textarea textarea-bordered w-full md:col-span-2"
          ></textarea>

        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button className="btn btn-primary mt-8 w-60">
            Add Subject
          </button>
        </div>

      </form>
    </div>
  );
};


export default AddSubject;