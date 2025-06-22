"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/users?limit=20')
      .then(res => {
        const modified = res.data.users.map(user => ({
          ...user,
          department: ['HR', 'Engineering', 'Sales', 'Marketing'][Math.floor(Math.random() * 4)],
          performance: Math.floor(Math.random() * 5) + 1
        }));
        setUsers(modified);
        setLoading(false);
      })
  }, []);

  return { users, loading };
};
