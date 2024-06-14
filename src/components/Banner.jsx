import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative h-[80vh]">
      <img
        src="https://i.ibb.co/pwy9spf/task-management-banner-bg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Manage Your Tasks Efficiently
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-white">
          Organize, prioritize, and achieve your goals with our intuitive task
          management tool.
        </p>
        <Link to="dashboard" className="mt-8">
          <button className="btn btn-primary">Let’s Explore</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
