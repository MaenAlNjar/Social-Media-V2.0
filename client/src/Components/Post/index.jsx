import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "../../redux/postSlice";
import  PostTemplate from "../PostTemplate/index"
import "./index.css"
const PostsList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  console.log("Posts state:", posts, loading, error);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
   <div className="posts-wrapper">
  <div className="PostContainer">
    {posts.length === 0 ? (
      <p>لا توجد منشورات</p>
    ) : (
      posts.map((post) => (
        <PostTemplate key={post._id} post={post} />
      ))
    )}
  </div>
</div>

  );
};

export default PostsList;
