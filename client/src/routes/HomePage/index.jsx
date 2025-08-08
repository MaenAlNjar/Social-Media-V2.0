import React from "react";
import CreatePost from "../../Components/CreatePost/index";
import Post from '../../Components/Post/index';
import "./index.css";

const Dashboard = () => {
  return (
      <div className="dashboard-container">
      <div className="create-post-section">
        <CreatePost />
      </div>
      <div className="posts-section">
        <Post />
      </div>
    </div>
  );
};

export default Dashboard;
