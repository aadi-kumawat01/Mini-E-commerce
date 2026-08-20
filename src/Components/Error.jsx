import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-zinc-900 px-4">
      <h1 className="text-8xl font-bold text-cyan-500">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found
      </h2>

      <p className="text-zinc-500 mt-3 text-center">
        Sorry, the page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-8 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition text-white"
      >
        Go Home
      </Link>
    </div>
  );
}