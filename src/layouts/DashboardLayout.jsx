import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FaBars, FaTasks, FaPlus, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const { logOut } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="drawer lg:drawer-open">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle"
        checked={drawerOpen}
        onChange={toggleDrawer}
      />
      <div className="drawer-content flex flex-col">
        {/* Mobile navbar */}
        <div className="lg:hidden p-4 flex justify-between items-center bg-gray-900 text-white">
          <button onClick={toggleDrawer} className="text-white">
            <FaBars size={24} />
          </button>
          <Link to="/" className="text-2xl font-bold" onClick={closeDrawer}>
            Task Manager
          </Link>
        </div>

        {/* Main content */}
        <div className="flex flex-col  min-h-screen">
          <Outlet />
        </div>
      </div>

      <div className="drawer-side">
        {/* Overlay to close drawer when clicking outside in small screens */}
        <label
          htmlFor="my-drawer-2"
          className={`drawer-overlay ${drawerOpen ? "block" : "hidden"}`}
          onClick={closeDrawer}
          aria-label="close sidebar"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-gray-900 text-gray-300">
          {/* Sidebar content */}
          <li className="mb-6">
            <Link
              to="/"
              className="text-2xl font-bold block mb-6 text-white"
              onClick={closeDrawer}
            >
              Task Manager
            </Link>
          </li>

          <li>
            <Link
              to="add-new"
              className="flex items-center p-2 hover:bg-gray-700 rounded"
              onClick={closeDrawer}
            >
              <FaPlus className="mr-2" /> Add New
            </Link>
          </li>
          <li>
            <Link
              to=""
              className="flex items-center p-2 hover:bg-gray-700 rounded"
              onClick={closeDrawer}
            >
              <FaTasks className="mr-2" /> Manage Tasks
            </Link>
          </li>
          <li className="mt-auto">
            <button
              className="w-full flex items-center p-2 bg-red-600 hover:bg-red-700 rounded mt-6"
              onClick={logOut}
            >
              <FaSignOutAlt className="mr-2" /> Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
