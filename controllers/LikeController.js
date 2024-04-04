// importing models
const Post = require('../models/Post');
const Like = require('../models/Like');

exports.createLike = async (req, res) => {
    try {
        const { post, user } = req.body;
        const like =  new Like({
            post,
            user,
        });
        const savedLike = await like.save();
        const updatedPost = await Post.findByIdAndUpdate(post, {
            $push: {
                likes: savedLike._id,
            },
        }, {
            new: true,
        }).populate(['likes','comments']).exec();
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
exports.deleteLike = async (req, res) => {
    try {
        const {post, like} = req.body;
        const deleteLike = await Like.findOneAndDelete({post:post, _id:like});
        const updatedPost = await Post.findByIdAndUpdate(post, {$pull:{likes:like}}, {new:true}).populate(['likes', 'comments']).exec();
        res.status(201).json({
            success:true,
            data:updatedPost,
            message:'view updated posts',
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error.message,
            message:error.message,

        })
    }
}