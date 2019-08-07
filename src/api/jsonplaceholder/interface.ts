import { AxiosResponse } from "axios";
import Post from "../../models/post";
import Comment from "../../models/comment";

interface PlaceholderAPIInterface {
  findPosts: () => Promise<AxiosResponse<Post[]>>;
  findPostById: (id: number) => Promise<AxiosResponse<Post>>;
  findCommentsByPostId: (postId: number) => Promise<AxiosResponse<Comment[]>>;
}

export default PlaceholderAPIInterface;
