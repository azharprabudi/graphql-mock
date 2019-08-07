import { injectable, inject } from "inversify";
import { AxiosInstance, AxiosResponse } from "axios";
import Post from "../../models/post";
import Comment from "../../models/comment";
import PlaceholderAPIInterface from "./interface";
import HTTPClientID from "../../identifiers/httpclient";

@injectable()
class PlaceholderAPI implements PlaceholderAPIInterface {
  @inject(HTTPClientID.PlaceholderHTTPClient)
  private client: AxiosInstance;

  async findPosts(): Promise<AxiosResponse<Post[]>> {
    return await this.client.get("/posts");
  }

  async findPostById(id: number): Promise<AxiosResponse<Post>> {
    return await this.client.get(`/posts/${id}`);
  }

  async findCommentsByPostId(
    postId: number
  ): Promise<AxiosResponse<Comment[]>> {
    return await this.client.get(`/comments?postId=${postId}`);
  }
}

export default PlaceholderAPI;
