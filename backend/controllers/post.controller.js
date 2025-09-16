import post from '../blogposts/post.blogposts.js';

export const getPosts = async (req, res) => {
    try{
      const posts = await post.find({});
      res.status(200).json({ success: true, data: posts});
  
    }catch(error){
      console.error("Error fetching posts:", error.message);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const createPost = async (req, res) => {
  const PostData = req.body;

  if (!PostData.content) {
    return res.status(400).json({ message: "Post content is required", success: false });
  }

  const newPost = new post(PostData);

  try {
    await newPost.save();
    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error("Error in creating post: ", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}