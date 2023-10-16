const Post = require('../model/post');
const User = require('../model/user');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}

const getAllposts = async (req,res)=>{
    try {
        const post = await Post.find();
        res.status(200).json(post);

    } catch (err) {
        console.error(err);
        res.status(409).json({message : err.message});
    }
}


const  getPost = async (req,res)=> {
    
    try {
        const location = await Post.findById(req.params.postId).exec();
        sendJsonResponse(res, 200, location);
        console.log(location)
        } catch (err) {
        sendJsonResponse(res, 500, { error: 'An error occurred' });
        }
}


const getUserPosts = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
const createPost = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}

const  updatePost = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
const  deletePost = (req,res)=> {
    sendJsonResponse(res, 200, {"status" : "success"});
}
module.exports = {deletePost,updatePost,getPost,createPost,getUserPosts,getAllposts};

