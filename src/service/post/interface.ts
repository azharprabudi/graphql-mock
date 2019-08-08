import PostTypeQuery from "../../@types/post/query";
import CommentTypeQuery from "../../@types/comment/query";

interface PostServiceInterface {
  findAll: () => Promise<PostTypeQuery[]>;
  findById: (id: number) => Promise<PostTypeQuery>;
  findCommentsByPostId: (postId: number) => Promise<CommentTypeQuery[]>;
}

export default PostServiceInterface;
