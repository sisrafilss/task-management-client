import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { serverURL } from "../../../serverURL";
import axios from "axios";

const AddNewTask = () => {
  const token = localStorage.getItem("token");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    // Log the form data to the console
    console.log("Form Data:", data);
    axios
      .post(`${serverURL}/tasks`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        if (response.data?.insertedId) {
          toast.success("Task added successfully!");
        }
        // reset();
      })
      .catch(function (error) {
        console.log(error);
      });
    // Dummy failure case (uncomment to test)
    // toast.error('Failed to add task. Please try again.');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow-md">
      <Toaster />
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title field */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className={`mt-1 p-2 w-full border rounded ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description field */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className={`mt-1 p-2 w-full border rounded ${
              errors.description ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Deadline field */}
        <div>
          <label
            htmlFor="deadline"
            className="block text-sm font-medium text-gray-700"
          >
            Deadline
          </label>
          <input
            id="deadline"
            type="date"
            {...register("deadline", { required: "Deadline is required" })}
            className={`mt-1 p-2 w-full border rounded ${
              errors.deadline ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.deadline && (
            <p className="text-red-500 text-sm mt-1">
              {errors.deadline.message}
            </p>
          )}
        </div>

        {/* Priority field */}
        <div>
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority
          </label>
          <select
            id="priority"
            {...register("priority", { required: "Priority is required" })}
            className={`mt-1 p-2 w-full border rounded ${
              errors.priority ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select Priority</option>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 text-sm mt-1">
              {errors.priority.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddNewTask;
