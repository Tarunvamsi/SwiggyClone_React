import React, { useState } from "react";

const LoginIcon = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prev) => !prev); // Toggle the login state
  };

  return (
    <button className="p-2" onClick={handleLoginToggle}>
      {isLoggedIn ? (
        // Logout SVG
        <svg
          className="h-8 w-8 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      ) : (
        // Login SVG
        <svg
          className="h-8 w-8 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
      )}
    </button>
  );
};

export default LoginIcon;
