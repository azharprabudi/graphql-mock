import { Resolver, FieldResolver, Arg, Query, Root } from "type-graphql";
import PostType from "../@types/post/query";
import { injectable, inject } from "inversify";
import PostServiceInterface from "../service/post/interface";
import ServiceID from "../identifiers/service";
import CommentTypeQuery from "../@types/comment/query";
import PostTypeQuery from "../@types/post/query";

@injectable()
@Resolver(of => PostTypeQuery)
export default class PostResolver {
  @inject(ServiceID.Post) service: PostServiceInterface;

  @Query(returns => [PostTypeQuery])
  async posts(): Promise<PostType[]> {
    return await this.service.findAll();
  }

  @Query(returns => PostTypeQuery)
  async post(@Arg("id") id: number): Promise<PostTypeQuery> {
    return await this.service.findById(id);
  }

  @FieldResolver()
  async comments(@Root() post: PostType): Promise<CommentTypeQuery[]> {
    return await this.service.findCommentsByPostId(post.id);
  }
}
