// src/api.js
const API_URL = 'http://localhost:5000/blog';

export const fetchPosts = async (page = 1) => {
  const res = await fetch(`${API_URL}?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  return await res.json();
};

export const createPost = async (postData) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });

  if (!res.ok) throw new Error('Failed to create post');
  return await res.json();
};

