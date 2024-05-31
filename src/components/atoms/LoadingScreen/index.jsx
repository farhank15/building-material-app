import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <svg
          className="w-16 h-16 animate-spin text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10.621 2.647A7.963 7.963 0 0120 12h-4a4.978 4.978 0 00-1.379 3.291l3 2.647zM12 16c-2.21 0-4-1.79-4-4h-4c0 4.418 3.582 8 8 8v-4zm0-4c0-2.21 1.79-4 4-4V4c-4.418 0-8 3.582-8 8h4zm-6.621-2.647A7.963 7.963 0 014 12H0c0-3.042 1.135-5.824 3-7.938l3-2.647zM10.621 4.062A7.963 7.963 0 0112 4v4c-2.21 0-4 1.79-4 4H4c0-3.042 1.135-5.824 3-7.938l3-2.647z"
          ></path>
        </svg>
        <p className="mt-4 text-lg font-semibold text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
