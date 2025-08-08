// src/components/PostsList.js
import React from 'react';
import Post from './Post'; // استيراد الـ component
import './PostsList.css'; // (optional) ستايل للـ container

// بيانات تجريبية
const samplePosts = [
  {
    id: 1,
    title: 'أول منشور لي في التطبيق!',
    content: 'مرحباً بالجميع! متحمس جداً لاستخدام هذا التطبيق ومشاركة أفكاري.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2595&auto=format&fit=crop',
    user: {
      name: 'علي محمد',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop',
    },
  },
  {
    id: 2,
    title: 'وصفة كيك شوكولاتة سهلة',
    content: 'المكونات: كوب دقيق، نصف كوب كاكاو، بيضتان، كوب سكر. الطريقة: ...',
    image: 'https://images.unsplash.com/photo-1587399321487-eb49b8004f21?q=80&w=2670&auto=format&fit=crop',
    user: {
      name: 'فاطمة أحمد',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2576&auto=format&fit=crop',
    },
  },
];

const PostsList = () => {
  return (
    <div className="posts-list-container">
      <h1>منشورات المجتمع</h1>
      {samplePosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;