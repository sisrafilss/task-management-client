/* eslint-disable react/prop-types */

import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDragEnd }) => (
  <div className="p-4">
    {tasks.map((task) => (
      <TaskItem key={task._id} task={task} onDragEnd={onDragEnd} />
    ))}
  </div>
);

export default TaskList;
