/* eslint-disable react/prop-types */
const TaskItem = ({ task, onDragEnd }) => (
  <div
    className="bg-gray-100 p-4 rounded shadow-md mb-2 cursor-pointer"
    draggable
    onDragEnd={(e) => onDragEnd(e, task._id)}
  >
    <h3 className="font-bold">{task.title}</h3>
    <p>{task.description}</p>
    <small>Due: {new Date(task.deadline).toLocaleDateString()}</small>
  </div>
);

export default TaskItem;
