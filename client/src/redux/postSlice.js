import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../lib/apiReq";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  console.log("Fetching posts...");
  const response = await apiRequest.get("post/post/GetAll");
  console.log("Response from server:", response.data);
  return response.data;
});


const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    setPosts: (state, action) => {  
      state.posts = action.payload;
    },
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPosts, addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
