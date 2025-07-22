import Post from "../models/post.js";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: "dgsjdx06z",
  api_key: "678699932414762",
  api_secret: "0tCidi0FOLcLo3LE08M1c3Wxvlk",
});

const uploadImage = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "Products" },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url); 
      }
    );

    const readable = Readable.from(file.buffer);
    readable.pipe(stream);
  });
};

export const createPost = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      imageUrl = await uploadImage(req.file);  
    }

    const newPost = new Post({
      ...req.body,
      imageUrl,       
      userId: req.user.id,
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json({
      message: "Error creating post",
      error: err.message,
    });
  }
};

export const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("userId", "username");
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Error fetching post", error: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (post.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    let imageUrl = post.imageUrl;
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      imageUrl = result.secure_url;
    }

    post.title = req.body.title || post.title;
    post.content = req.body.content || post.content;
    post.imageUrl = imageUrl;

    const updated = await post.save();
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Error updating post", error: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    await post.remove();
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting post", error: err.message });
  }
};