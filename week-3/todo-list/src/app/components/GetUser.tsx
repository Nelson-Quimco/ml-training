"use client";
import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

interface User {
  id: string;
  name: string;
  email: string;
  task: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

const GetUser = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/users");
      const data = await response.json();

      const updatedUsers = await Promise.all(
        data.map(async (user: User) => {
          let updatedUser = { ...user };

          if (user.task === "DONE") {
            const response = await fetch(
              `http://localhost:4000/users/${user.id}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ isCompleted: true }),
              }
            );
            updatedUser = await response.json();
          } else {
            updatedUser = { ...user, isCompleted: false };
          }
          return updatedUser;
        })
      );

      setUsers(updatedUsers);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:4000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setUsers(users.filter((user) => user.id !== id));
    } catch (error: any) {
      setError(error.message);
    }
  };
  const handleUpdate = async (id: string) => {
    // Add your update logic here
    console.log(`Updating user with ID: ${id}`);
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="mb-4 text-2xl font-bold">Users</h1>
      {error && <div className="text-red-500 mb-4">Error: {error}</div>}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={fetchUsers}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Get Users"}
      </button>
      <div className="w-[100%] flex items-center justify-center">
        {users.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 font-bold text-center">Name</th>
                  <th className="px-4 py-2 font-bold text-center">Email</th>
                  <th className="px-4 py-2 font-bold text-center">Task</th>
                  <th className="px-4 py-2 font-bold text-center">
                    IsCompleted
                  </th>
                  <th className="px-4 py-2 font-bold text-center">
                    Created At
                  </th>
                  <th className="px-4 py-2 font-bold text-center">
                    Updated At
                  </th>
                  <th className="px-4 py-2 font-bold text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user: User) => (
                  <tr key={user.id} className="border-b">
                    <td className="px-4 py-2">{user.name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.task}</td>
                    <td className="px-4 py-2 text-center">
                      {user.isCompleted ? "True" : "False"}
                    </td>
                    <td className="px-4 py-2">{user.createdAt}</td>
                    <td className="px-4 py-2">{user.updatedAt}</td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full"
                          onClick={() => handleUpdate(user.id)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleDelete(user.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-gray-500 text-center mt-8">
            {isLoading ? "Loading..." : "No users found."}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetUser;
