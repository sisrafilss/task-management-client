const Footer = () => (
  <footer className="bg-blue-500 text-white p-4">
    <p>&copy; 2024 Task Manager. All rights reserved.</p>
    <ul className="flex justify-center">
      <li className="mx-2">
        <a href="https://facebook.com" className="hover:text-gray-300">
          Facebook
        </a>
      </li>
      <li className="mx-2">
        <a href="https://twitter.com" className="hover:text-gray-300">
          Twitter
        </a>
      </li>
      <li className="mx-2">
        <a href="https://instagram.com" className="hover:text-gray-300">
          Instagram
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
