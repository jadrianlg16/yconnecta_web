// components/Foro.tsx
"use client";
import React, { useState } from 'react';

type Post = {
  id: number;
  username: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
};

const initialPosts: Post[] = [
  {
    id: 1,
    username: 'Jorge',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 12,
    comments: 3,
    shares: 1,
  },
  {
    id: 2,
    username: 'Anonimo',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 60,
    comments: 9,
    shares: 1,
  },
  {
    id: 2,
    username: 'Usuario #71723',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    likes: 2,
    comments: 1,
    shares: 1,
  },
  // ... other posts
];

const OrgForo: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [response, setResponse] = useState('');

  return (
    <div className="flex flex-col space-y-4 mt-20">
      {posts.map(post => (
        <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-gray-300 rounded-full p-1">
              {/* User icon or image placeholder */}
            </div>
            <h4 className="text-lg font-semibold">{post.username}</h4>
          </div>
          <p className="text-gray-600 mb-2">{post.content}</p>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            <button onClick={() => {/* Handle like */}}>
              👍 {post.likes}
            </button>
            <button onClick={() => {/* Handle comment */}}>
              💬 {post.comments}
            </button>
            <button onClick={() => {/* Handle share */}}>
              ↗️ {post.shares}
            </button>
          </div>
        </div>
      ))}
      <textarea
        className="bg-gray-100 p-3 rounded-lg shadow"
        placeholder="Deja una respuesta..."
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
    </div>
  );
};

export default OrgForo;
