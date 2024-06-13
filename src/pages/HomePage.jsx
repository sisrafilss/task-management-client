/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const HomePage = () => (
  <>
    <header className="text-center p-16 bg-blue-200">
      <h1 className="text-4xl mb-4">Welcome to Task Manager</h1>
      <p className="mb-8">Enhance and improve your task management</p>
      <Link to="/login">
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Let's Explore
        </button>
      </Link>
    </header>
    <section className="p-16">
      <h2 className="text-2xl mb-4">Who uses our platform?</h2>
      <p>Developers, corporate professionals, bankers, and more...</p>
    </section>
  </>
);

export default HomePage;
