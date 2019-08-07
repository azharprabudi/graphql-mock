import Post from "../../models/post";
import PostType from "../../@types/post";
import CommentType from "../../@types/comment";

interface PostServiceInterface {
  findAll: () => Promise<PostType[]>;
  findById: (id: number) => Promise<PostType>;
  findCommentsByPostId: (postId: number) => Promise<CommentType[]>;
}

export default PostServiceInterface;
