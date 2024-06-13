"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [task, setTask] = useState("PENDING");
  const [isCompleted, setIsCompleted] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          task,
          isCompleted,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
      });
      if (response.ok) {
        router.push("/");
      } else {
        console.error("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">Add User</h1>
      </div>
      <div className="flex items-center bg-white shadow-md rounded-lg p-6">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full h-10 mr-52"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full  h-10"
            />
          </div>
          <div>
            <select
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 w-full  h-10"
            >
              <option value="PENDING">Pending</option>
              <option value="ONGOING">Ongoing</option>
              <option value="DONE">Done</option>
            </select>
          </div>
          {/* <div className="flex items-center">
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={(e) => setIsCompleted(e.target.checked)}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="completed"
              className="ml-2 block font-medium text-gray-700"
            >
              Completed
            </label>
          </div> */}
          <div className="h-10 flex items-center">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md w-full"
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
