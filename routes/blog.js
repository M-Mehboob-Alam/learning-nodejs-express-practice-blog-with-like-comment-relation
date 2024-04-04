const express = require('express');
const router = express.Router();
// importing controller

const { createPost, getPost, getAllPost, deletePost, updatePost, likePost, unlikePost, commentPost, deleteComment } = require('../controllers/PostController');
const {createComment,} = require('../controllers/CommentController');
const {createLike,deleteLike} = require('../controllers/LikeController');
// routing
router.post('/create/post', createPost);
router.get('/get/all/post', getAllPost);
router.post('/create/comment', createComment);
router.post('/create/like', createLike);
router.delete('/delete/like', deleteLike);

module.exports = router