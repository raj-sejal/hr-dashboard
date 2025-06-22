"use client";
import Layout from '../components/Layout';
import { useBookmarks } from '../hooks/useBookmarks';

export default function Bookmarks() {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <Layout>
      <h1 className="text-xl font-bold mb-4">Bookmarked Employees</h1>
      {bookmarks.length === 0 && <p>No bookmarks yet.</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {bookmarks.map(user => (
          <div key={user.id} className="p-4 bg-white rounded shadow">
            <h2 className="font-bold">{user.firstName} {user.lastName}</h2>
            <p>{user.email}</p>
            <button className="btn mt-2" onClick={() => removeBookmark(user.id)}>Remove</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
