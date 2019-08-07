import { injectable, inject } from "inversify";
import PostServiceInterface from "./interface";
import PostType from "../../@types/post";
import PlaceholderAPIInterface from "../../api/jsonplaceholder/interface";
import APIID from "../../identifiers/api";
import CommentType from "../../@types/comment";

@injectable()
class PostService implements PostServiceInterface {
  @inject(APIID.Placeholder) private api: PlaceholderAPIInterface;

  async findAll(): Promise<PostType[]> {
    const { data } = await this.api.findPosts();
    return data as PostType[];
  }

  async findById(id: number): Promise<PostType> {
    const { data } = await this.api.findPostById(id);
    return data as PostType;
  }

  async findCommentsByPostId(postId: number): Promise<CommentType[]> {
    const { data } = await this.api.findCommentsByPostId(postId);
    return data as CommentType[];
  }
}

export default PostService;
