import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import "./index.css";
import apiRequest from "../../lib/apiReq"
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const token = useSelector((state) => state.user.user);

 const handlePostSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  if (image) {
    formData.append("image", image);
  }

  console.log("Token being sent:", token.token);

  try {
    const res = await apiRequest.post(
      "post/posts", 
      formData,
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Success", res.data);

    setMessage("تم إنشاء البوست بنجاح!");
    setTitle("");
    setContent("");
    setImage(null);
  } catch (err) {
    console.error("Error:", err);
    setMessage(err.response?.data?.error || "حدث خطأ أثناء رفع البوست");
  }
};


  return (
  <form onSubmit={handlePostSubmit} className="create-post-horizontal">
  <div className="post-left">
    {/* <img src="/avatar.jpg" alt="Avatar" className="avatar" /> */}
  </div>

  <div className="post-right">
    <input
      type="text"
      placeholder="عنوان البوست..."
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
    <textarea
      placeholder="اكتب المحتوى..."
      value={content}
      onChange={(e) => setContent(e.target.value)}
      required
    />
    <div className="post-actions">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">نشر</button>
    </div>
    {message && (
      <p className={message.includes("بنجاح") ? "success-message" : "error-message"}>
        {message}
      </p>
    )}
  </div>
</form>

  );
};

export default CreatePost;
