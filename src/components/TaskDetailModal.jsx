/* eslint-disable react/prop-types */
import Modal from "react-modal";

const TaskDetailModal = ({ isOpen, onRequestClose, task }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="absolute inset-0 flex items-center justify-center p-4 bg-opacity-50 bg-gray-900"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      contentLabel="Task Detail Modal"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{task.title}</h2>
          <button
            className="text-gray-400 hover:text-gray-600"
            onClick={onRequestClose}
          >
            &times;
          </button>
        </div>
        <p className="text-sm text-gray-500">Deadline: {task.deadline}</p>
        <p
          className={`text-sm ${
            task.priority === "high"
              ? "text-red-500"
              : task.priority === "moderate"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          Priority:{" "}
          {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
        </p>
        <p className="mt-2">{task.description}</p>
      </div>
    </Modal>
  );
};

export default TaskDetailModal;
