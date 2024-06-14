/* eslint-disable no-unused-vars */
// src/App.jsx
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
// import Modal from "react-modal";
import toast, { Toaster } from "react-hot-toast";
import TaskDetailModal from "../../components/TaskDetailModal";
import { initialTasks } from "./draft";

// Modal.setAppElement('#root');

const ManageTasks = () => {
  // Dummy task data

  const [toDos, setToDos] = useState(initialTasks.todo);
  const [onGoing, setOnGoing] = useState(initialTasks.ongoing);
  const [completed, setCompleted] = useState(initialTasks.completed);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (task) => {
    setSelectedTask(task);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTask(null);
  };

  const handleMove = (section, taskId) => {
    let task;
    if (section === "todo") {
      task = toDos.find((task) => task.id === taskId);
      setToDos(toDos.filter((task) => task.id !== taskId));
      setOnGoing([...onGoing, task]);
    } else if (section === "ongoing") {
      task = onGoing.find((task) => task.id === taskId);
      setOnGoing(onGoing.filter((task) => task.id !== taskId));
      setCompleted([...completed, task]);
    } else if (section === "completed") {
      task = completed.find((task) => task.id === taskId);
      setCompleted(completed.filter((task) => task.id !== taskId));
      setToDos([...toDos, task]);
    }
  };

  // Handle delete with react-hot-toast
  const handleDelete = (section, taskId) => {
    toast((t) => (
      <div className="text-gray-900">
        <p>Are you sure you want to delete this task?</p>
        <div className="flex justify-end space-x-2 mt-2">
          <button
            className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => {
              if (section === "todo") {
                setToDos(toDos.filter((task) => task.id !== taskId));
              } else if (section === "ongoing") {
                setOnGoing(onGoing.filter((task) => task.id !== taskId));
              } else if (section === "completed") {
                setCompleted(completed.filter((task) => task.id !== taskId));
              }
              toast.dismiss(t.id);
              toast.success("Task deleted successfully");
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-4 grid gap-4 lg:grid-cols-3 grid-cols-1">
      <Toaster />

      {/* Todo Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 capitalize">Todo</h2>
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toDos.map((task, i) => (
              <tr key={task.id} className="text-center border-t">
                <td className="py-2 px-4 border-b">{task.title}</td>
                <td className="py-2 px-4 border-b flex justify-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => openModal(task)}
                  >
                    Detail
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleMove("todo", task.id)}
                  >
                    Move to Ongoing
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete("todo", task.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ongoing Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 capitalize">Ongoing</h2>
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {onGoing.map((task, i) => (
              <tr key={task.id} className="text-center border-t">
                <td className="py-2 px-4 border-b">{task.title}</td>
                <td className="py-2 px-4 border-b flex justify-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => openModal(task)}
                  >
                    Detail
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleMove("ongoing", task.id)}
                  >
                    Move to Completed
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete("ongoing", task.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Completed Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 capitalize">Completed</h2>
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg mb-8">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {completed.map((task, i) => (
              <tr key={task.id} className="text-center border-t">
                <td className="py-2 px-4 border-b">{task.title}</td>
                <td className="py-2 px-4 border-b flex justify-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => openModal(task)}
                  >
                    Detail
                  </button>
                  <button
                    className="text-green-500 hover:text-green-700"
                    onClick={() => handleMove("completed", task.id)}
                  >
                    Move to Todo
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete("completed", task.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedTask && (
        <TaskDetailModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          task={selectedTask}
        />
      )}
    </div>
  );
};

export default ManageTasks;
