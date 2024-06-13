// src/pages/DashboardPage.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DashboardPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('/api/tasks', { headers: { 'x-auth-token': localStorage.getItem('token') } });
      setTasks(res.data);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    const res = await axios.post('/api/tasks', task, { headers: { 'x-auth-token': localStorage.getItem('token') } });
    setTasks([...tasks, res.data]);
  };

  const updateTask = async (id, status) => {
    const res = await axios.patch(`/api/tasks/${id}`, { status }, { headers: { 'x-auth-token': localStorage.getItem('token') } });
    setTasks(tasks.map(task => task._id === id ? res.data : task));
  };

  // eslint-disable-next-line no-unused-vars
  const deleteTask = async (id) => {
    await axios.delete(`/api/tasks/${id}`, { headers: { 'x-auth-token': localStorage.getItem('token') } });
    setTasks(tasks.filter(task => task._id !== id));
  };

  const onDragEnd = (e, id) => {
    const status = e.target.innerText;
    updateTask(id, status);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <TaskForm onSubmit={addTask} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div>
            <h2 className="text-xl font-bold mb-2">To-do</h2>
            <TaskList tasks={tasks.filter(task => task.status === 'To-do')} onDragEnd={onDragEnd} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Ongoing</h2>
            <TaskList tasks={tasks.filter(task => task.status === 'Ongoing')} onDragEnd={onDragEnd} />
          </div>
          <div>
            <h2 className="text-xl font-bold mb-2">Completed</h2>
            <TaskList tasks={tasks.filter(task => task.status === 'Completed')} onDragEnd={onDragEnd} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;
