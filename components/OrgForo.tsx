// // components/Foro.tsx
// "use client";
// import React, { useState } from 'react';

// type Post = {
//   id: number;
//   username: string;
//   content: string;
//   likes: number;
//   comments: number;
//   shares: number;
// };

// const initialPosts: Post[] = [
//   {
//     id: 1,
//     username: 'Jorge',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     likes: 12,
//     comments: 3,
//     shares: 1,
//   },
//   {
//     id: 2,
//     username: 'Anonimo',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     likes: 60,
//     comments: 9,
//     shares: 1,
//   },
//   {
//     id: 2,
//     username: 'Usuario #71723',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//     likes: 2,
//     comments: 1,
//     shares: 1,
//   },
//   // ... other posts
// ];

// const OrgForo: React.FC = () => {
//   const [posts, setPosts] = useState<Post[]>(initialPosts);
//   const [response, setResponse] = useState('');

//   return (
//     <div className="flex flex-col space-y-4 mt-20">
//       {posts.map(post => (
//         <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow">
//           <div className="flex items-center space-x-2 mb-2">
//             <div className="bg-gray-300 rounded-full p-1">
//               {/* User icon or image placeholder */}
//             </div>
//             <h4 className="text-lg font-semibold">{post.username}</h4>
//           </div>
//           <p className="text-gray-600 mb-2">{post.content}</p>
//           <div className="flex items-center space-x-4 text-gray-500 text-sm">
//             <button onClick={() => {/* Handle like */}}>
//               👍 {post.likes}
//             </button>
//             <button onClick={() => {/* Handle comment */}}>
//               💬 {post.comments}
//             </button>
//             <button onClick={() => {/* Handle share */}}>
//               ↗️ {post.shares}
//             </button>
//           </div>
//         </div>
//       ))}
//       <textarea
//         className="bg-gray-100 p-3 rounded-lg shadow"
//         placeholder="Deja una respuesta..."
//         value={response}
//         onChange={(e) => setResponse(e.target.value)}
//       />
//     </div>
//   );
// };

// export default OrgForo;


// "use client" directive indicates that this component should only be executed on the client side.
// This is particularly useful for components that rely on browser-specific features or when you want to offload work from the server to the client.
"use client";
import React, { useState } from 'react';

// Define the structure for a forum post.
type Post = {
  id: number; // Unique identifier for each post.
  username: string; // The username of the person who posted.
  content: string; // The main content of the post.
  likes: number; // Number of likes the post has received.
  comments: number; // Number of comments on the post.
  shares: number; // Number of times the post has been shared.
};

// Initial sample posts to display in the forum.
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

/**
 * OrgForo is a forum-like component that renders a list of posts and a textarea for writing a response.
 * Each post displays the username, content, and social interactions (likes, comments, shares).
 * 
 * The component showcases how to handle state with React hooks, both for displaying posts and managing the textarea input.
 */
const OrgForo: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(initialPosts); // State to store the forum posts.
  const [response, setResponse] = useState(''); // State to store the user's response in the textarea.

  return (
    <div className="flex flex-col space-y-4 mt-20">
      {posts.map(post => (
        <div key={post.id} className="bg-gray-100 p-4 rounded-lg shadow">
          <div className="flex items-center space-x-2 mb-2">
            <div className="bg-gray-300 rounded-full p-1">
              {/* This div could be replaced with a user avatar if available. Currently, it acts as a placeholder. */}
            </div>
            <h4 className="text-lg font-semibold">{post.username}</h4>
          </div>
          <p className="text-gray-600 mb-2">{post.content}</p>
          <div className="flex items-center space-x-4 text-gray-500 text-sm">
            {/* These buttons are placeholders for social interaction functionality. 
                In a full implementation, these would trigger state updates to reflect the user's interactions. */}
            <button onClick={() => {/* Handle like functionality */}}>
              👍 {post.likes}
            </button>
            <button onClick={() => {/* Handle comment functionality */}}>
              💬 {post.comments}
            </button>
            <button onClick={() => {/* Handle share functionality */}}>
              ↗️ {post.shares}
            </button>
          </div>
        </div>
      ))}
      {/* Textarea for writing a response. It updates the 'response' state on change. */}
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
