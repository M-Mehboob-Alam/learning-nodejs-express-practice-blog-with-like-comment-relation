// importing post molde

const Comment = require('../models/Comment');
const Post = require('../models/Post');
exports.createComment = async (req, res) => {
    try {
        const {post, user, body } = req.body;
        const comment =  new Comment({
            post,
            user,
            body,
        });
        const savedComment = await comment.save();
         const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: {
                comments: savedComment._id,
            },
        }, {
            new: true,
        }).populate('comments').exec();
        res.status(201).json({
            success: true,
            data: updatedPost,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
}