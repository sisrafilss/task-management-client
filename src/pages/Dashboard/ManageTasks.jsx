import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

// Initial dummy tasks
const initialTasks = {
  todo: [
    { id: "1", content: "Task 1" },
    { id: "2", content: "Task 2" },
  ],
  ongoing: [{ id: "3", content: "Task 3" }],
  completed: [{ id: "4", content: "Task 4" }],
};

const ManageTasks = () => {
  const [tasks, setTasks] = useState(initialTasks);

  // Handle delete functionality
  const handleDelete = (section, taskId) => {
    const confirmDelete = () => {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [section]: prevTasks[section].filter((task) => task.id !== taskId),
      }));
      toast.success("Task deleted successfully!");
    };

    toast(
      (t) => (
        <span>
          Are you sure you want to delete this task?
          <div className="flex justify-center gap-2 mt-2">
            <button
              onClick={() => {
                confirmDelete();
                toast.dismiss(t.id);
              }}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Yes
            </button>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="bg-gray-300 px-4 py-1 rounded"
            >
              No
            </button>
          </div>
        </span>
      ),
      {
        duration: 5000,
      }
    );
  };

  // Handle drag end event
  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return; // Task was dropped outside the list

    // If the task was dropped in the same place, do nothing
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Reorder tasks
    const sourceTasks = Array.from(tasks[source.droppableId]);
    const [movedTask] = sourceTasks.splice(source.index, 1);
    const destinationTasks = Array.from(tasks[destination.droppableId]);
    destinationTasks.splice(destination.index, 0, movedTask);

    // Update state with the new tasks order
    setTasks((prevTasks) => ({
      ...prevTasks,
      [source.droppableId]: sourceTasks,
      [destination.droppableId]: destinationTasks,
    }));
  };

  // Render individual task
  const renderTask = (task, index, section) => (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <motion.div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex justify-between items-center p-2 bg-white rounded shadow mb-2"
        >
          <span>{task.content}</span>
          <FaTrash
            className="text-red-500 cursor-pointer"
            onClick={() => handleDelete(section, task.id)}
          />
        </motion.div>
      )}
    </Draggable>
  );

  // Render task section
  const renderSection = (sectionTitle, sectionId) => (
    <Droppable droppableId={sectionId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="flex-1 bg-gray-100 p-4 rounded shadow-md"
        >
          <h2 className="text-xl font-bold mb-4">{sectionTitle}</h2>
          {tasks[sectionId].map((task, index) =>
            renderTask(task, index, sectionId)
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <div className="p-4 flex flex-col lg:flex-row gap-4">
      <Toaster />
      <DragDropContext onDragEnd={onDragEnd}>
        {renderSection("To-do", "todo")}
        {renderSection("Ongoing", "ongoing")}
        {renderSection("Completed", "completed")}
      </DragDropContext>
    </div>
  );
};

export default ManageTasks;
