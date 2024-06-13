/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

const TaskForm = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white p-4 shadow-md rounded"
    >
      <input
        name="title"
        ref={register}
        placeholder="Title"
        required
        className="w-full mb-2 p-2 border rounded"
      />
      <textarea
        name="description"
        ref={register}
        placeholder="Description"
        className="w-full mb-2 p-2 border rounded"
      />
      <input
        type="date"
        name="deadline"
        ref={register}
        required
        className="w-full mb-2 p-2 border rounded"
      />
      <select
        name="priority"
        ref={register}
        required
        className="w-full mb-2 p-2 border rounded"
      >
        <option value="Low">Low</option>
        <option value="Moderate">Moderate</option>
        <option value="High">High</option>
      </select>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
