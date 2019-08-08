import { injectable, inject } from "inversify";
import PostServiceInterface from "./interface";
import PlaceholderAPIInterface from "../../api/jsonplaceholder/interface";
import APIID from "../../identifiers/api";
import PostTypeQuery from "../../@types/post/query";
import CommentTypeQuery from "../../@types/comment/query";

@injectable()
class PostService implements PostServiceInterface {
  @inject(APIID.Placeholder) private api: PlaceholderAPIInterface;

  async findAll(): Promise<PostTypeQuery[]> {
    const { data } = await this.api.findPosts();
    return data as PostTypeQuery[];
  }

  async findById(id: number): Promise<PostTypeQuery> {
    const { data } = await this.api.findPostById(id);
    return data as PostTypeQuery;
  }

  async findCommentsByPostId(postId: number): Promise<CommentTypeQuery[]> {
    const { data } = await this.api.findCommentsByPostId(postId);
    return data as CommentTypeQuery[];
  }
}

export default PostService;
