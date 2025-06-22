"use client";
import { useBookmarks } from '../hooks/useBookmarks';
import Link from 'next/link';

export default function Card({ user }) {
  const { addBookmark } = useBookmarks();

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold text-lg">{user.firstName} {user.lastName}</h2>
      <p>{user.email}</p>
      <p className="text-sm text-gray-500">{user.department}</p>

      <div className="flex items-center my-2">
        {Array(user.performance).fill().map((_, i) => (
          <span key={i} className="text-yellow-400">★</span>
        ))}
      </div>

      <div className="flex justify-between mt-2">
        <Link href={`/employee/${user.id}`} className="btn">View</Link>
        <button className="btn" onClick={() => addBookmark(user)}>Bookmark</button>
      </div>
    </div>
  );
}
