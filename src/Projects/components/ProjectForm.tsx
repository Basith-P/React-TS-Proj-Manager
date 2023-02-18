import React from "react";

type Props = {
    onCancel: () => void;
};

const ProjectForm = (props: Props) => {
  return (
    <form className="w-full bg-gray-800 p-5 rounded-lg max-w-md">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-white"
        >
          Project Name
        </label>
        <input
          type="text"
          id="name"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your project name"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-white"
        >
          Project Description
        </label>
        <textarea
          id="description"
          rows={4}
          className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your project description"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="budget"
          className="block mb-2 text-sm font-medium text-white"
        >
          Budget
        </label>
        <input
          type="text"
          id="budget"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your project budget"
          required
        />
      </div>
      <div className="flex items-start mb-4">
        <div className="flex items-center h-5">
          <input
            id="isActive"
            type="checkbox"
            name="isActive"
            value=""
            className="w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-blue-600 ring-offset-gray-800 focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="isActive"
          className="ml-2 text-sm font-medium text-gray-300"
        >
          Active now
        </label>
      </div>
      <button
        type="submit"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-1.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
      >
        Save
      </button>
      <button
        type="button"
        className="ml-3 text-white hover:text-black focus:ring-4 outline-1 outline outline-gray-500 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-1.5 text-center hover:bg-gray-200 focus:ring-white-800"
        onClick={props.onCancel}
      >
        Cancel
      </button>
    </form>
  );
};

export default ProjectForm;
