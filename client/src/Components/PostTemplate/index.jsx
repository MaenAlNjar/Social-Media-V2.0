import "./index.css";
const PostTemplate = ({ post }) => {
  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-author">
        🖊 تم النشر بواسطة: <strong>{post.userId.username}</strong>
      </p>
      <small className="post-date">
        📅 {new Date(post.createdAt).toLocaleString()}
      </small>

      <p className="post-content">{post.content}</p>

      {post.imageUrl && (
        <img className="post-image" src={post.imageUrl} alt={post.title} />
      )}
    </div>
  );
};

export default PostTemplate;
