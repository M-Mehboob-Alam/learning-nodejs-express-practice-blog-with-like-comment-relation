const express = require('express');
// importing model

const Post = require('../models/Post');
exports.createPost =async (req, res) => {
  try {
        const { title, body } = req.body;
        console.log(title,body);
        const post =  new Post({
            title,
            body,
        });
        const savedPost = await post.save();
        res.status(201).json({
            success: true,
            data: savedPost,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};
exports.getAllPost = async(req, res) => {
  try {
    const posts = await Post.find().populate(['likes','comments']).exec();
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};