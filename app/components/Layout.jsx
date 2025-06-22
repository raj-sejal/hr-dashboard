 "use client";
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
      <header className="p-4 bg-blue-600 text-white flex justify-between">
        <h1 className="font-bold">HR Dashboard</h1>
        <nav className="flex items-center">
          <Link className="mr-4" href="/">Home</Link>
          <Link className="mr-4" href="/bookmarks">Bookmarks</Link>
          <Link href="/analytics">Analytics</Link>
          <DarkModeToggle />
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
