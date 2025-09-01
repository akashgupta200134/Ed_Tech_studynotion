import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function RequirementsField({
  name, 
  label, 
  register, 
  setValue, 
  errors, 
  getvalues
}) { 
  const { editCourse, course } = useSelector((state) => state.course);
  const [requirement, setRequirement] = useState("");
  const [requirementsList, setRequirementsList] = useState([]);

  useEffect(() => {
    if(editCourse) {
      setRequirementsList(course?.instructions || []);
    }
    register(name, { required: true, validate: (value) => value.length > 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setValue(name, requirementsList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requirementsList]);

  const handleAddRequirement = () => {
    if(requirement.trim()) {
      setRequirementsList([...requirementsList, requirement.trim()]);
      setRequirement("");
    }
  };

  const handleRemoveRequirement = (index) => {
    const updatedRequirements = [...requirementsList];
    updatedRequirements.splice(index, 1);
    setRequirementsList(updatedRequirements);
  };

  return (
    <div className="flex flex-col space-y-3">
      {/* Label */}
      <label htmlFor={name} className="text-sm font-medium text-richblack-5">
        {label} <sup className="text-pink-200">*</sup>
      </label>

      {/* Input + Add Button */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          id={name}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          className="w-full px-3 py-2 text-richblack-5 bg-richblack-700 border border-richblack-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-50 focus:border-yellow-50 transition"
          placeholder={`Enter ${label.toLowerCase()}`}
        />
        <button
          type="button"
          onClick={handleAddRequirement}
          className="px-4 py-2 bg-yellow-50 text-richblack-900 font-semibold rounded-md hover:bg-yellow-100 transition"
        >
          Add
        </button>
      </div>

      {/* List of Requirements */}
      {requirementsList.length > 0 && (
        <ul className="mt-2 flex flex-col gap-2">
          {requirementsList.map((req, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-richblack-600 px-3 py-1 rounded-md"
            >
              <span className="text-richblack-5">{req}</span>
              <button
                type="button"
                onClick={() => handleRemoveRequirement(index)}
                className="text-xs text-pink-200 hover:text-pink-100 transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Error */}
      {errors[name] && (
        <span className="text-xs text-pink-200 tracking-wide">
          {label} is required
        </span>
      )}
    </div>
  );
}
