import React from "react";

function Container({ children }) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative left-96 top-36"
    >
      {children}
    </a>
  );
}

export default Container;
