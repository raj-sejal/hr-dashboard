"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginPage from "./login/page"; // Assuming login page path
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import Link from "next/link";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  image: string;
  department: string;
};

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  age: z.string().min(1),
  department: z.string().min(1),
});

export default function HomePage() {
  const [users, setUsers] = useState<User[]>([]);
  const [visibleUsers, setVisibleUsers] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/users?limit=100");
    const fetchedUsers = response.data.users.map((user: any) => ({
      ...user,
      department: getRandomDepartment(),
    }));
    setUsers(fetchedUsers);
    setVisibleUsers(fetchedUsers.slice(0, page * 12));
  };

  useEffect(() => {
    if (loggedIn) fetchData();
  }, [loggedIn, page]);

  const getRandomDepartment = (): string => {
    const departments = ["Engineering", "Marketing", "Sales", "HR", "Finance"];
    return departments[Math.floor(Math.random() * departments.length)];
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: any) => {
    const newUser: User = {
      id: users.length + 1,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      age: parseInt(data.age),
      image: "https://via.placeholder.com/150",
      department: data.department,
    };
    const updatedUsers = [newUser, ...users];
    setUsers(updatedUsers);
    setVisibleUsers(updatedUsers.slice(0, page * 12));
    reset();
    setShowModal(false);
  };

  if (!loggedIn) {
    return <LoginPage onLogin={() => setLoggedIn(true)} />;
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-900">
          HR Performance Dashboard
        </h1>
        <button
          onClick={() => setShowModal(true)}
          className="btn btn-success"
        >
          Create User
        </button>
      </div>

      {/* User Cards */}
      <motion.div layout className="responsive-grid mb-10">
        {visibleUsers.map((user) => (
          <motion.div
            key={user.id}
            layout
            className="card text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={user.image}
              alt={user.firstName}
              className="w-28 h-28 rounded-full mx-auto mb-6 object-cover border-4 border-indigo-500 shadow-md"
            />
            <h2 className="text-2xl font-semibold mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-indigo-700 font-semibold mb-2">{user.department}</p>
            <p className="text-gray-600 mb-1">{user.email}</p>
            <p className="text-gray-600 mb-4">Age: {user.age}</p>

            <div className="flex justify-center gap-4">
              <Link href={`/employee/${user.id}`}>
                <button className="btn btn-primary">View</button>
              </Link>
              <button className="btn btn-success">Bookmark</button>
              <button className="btn btn-secondary">Promote</button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button */}
      {visibleUsers.length < users.length && (
        <div className="flex justify-center">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="btn btn-primary px-10"
          >
            Load More
          </button>
        </div>
      )}

      {/* Create User Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="text-3xl mb-6 text-indigo-900 font-extrabold">
              Create User
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                {...register("firstName")}
                placeholder="First Name"
                className="p-3 border rounded-lg w-full"
              />
              {errors.firstName && (
                <p className="text-red-600 text-sm">First name is required</p>
              )}

              <input
                {...register("lastName")}
                placeholder="Last Name"
                className="p-3 border rounded-lg w-full"
              />
              {errors.lastName && (
                <p className="text-red-600 text-sm">Last name is required</p>
              )}

              <input
                {...register("email")}
                placeholder="Email"
                className="p-3 border rounded-lg w-full"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">Invalid email</p>
              )}

              <input
                {...register("age")}
                placeholder="Age"
                className="p-3 border rounded-lg w-full"
              />
              {errors.age && (
                <p className="text-red-600 text-sm">Age is required</p>
              )}

              <input
                {...register("department")}
                placeholder="Department"
                className="p-3 border rounded-lg w-full"
              />
              {errors.department && (
                <p className="text-red-600 text-sm">Department is required</p>
              )}

              <div className="flex justify-end gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
