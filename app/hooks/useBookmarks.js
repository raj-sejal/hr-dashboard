"use client";
import { create } from 'zustand';

export const useBookmarks = create((set) => ({
  bookmarks: [],
  addBookmark: (user) => set((state) => ({
    bookmarks: [...state.bookmarks, user]
  })),
  removeBookmark: (id) => set((state) => ({
    bookmarks: state.bookmarks.filter(user => user.id !== id)
  })),
}));
