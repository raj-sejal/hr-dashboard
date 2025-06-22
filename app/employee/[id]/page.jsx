"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

export default function EmployeeDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`https://dummyjson.com/users/${id}`);
      const randomDepartments = ["Engineering", "Marketing", "Sales", "HR", "Finance"];
      const department = randomDepartments[Math.floor(Math.random() * randomDepartments.length)];
      setUser({ ...response.data, department });
    };
    fetchUser();
  }, [id]);

  if (!user) return <div className="p-8 text-xl font-semibold">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">{user.firstName} {user.lastName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={user.image} alt={user.firstName} className="rounded-lg w-80 mb-4" />
          <p><strong>Department:</strong> {user.department}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Age:</strong> {user.age}</p>
          <p><strong>Address:</strong> {user.address?.address}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">Performance History</h2>
          <ul className="list-disc ml-5 space-y-1">
            <li>⭐ Excellent Q1 2024</li>
            <li>⭐ Good Q4 2023</li>
            <li>⭐ Satisfactory Q3 2023</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
