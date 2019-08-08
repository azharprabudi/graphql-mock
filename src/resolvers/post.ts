import { Resolver, FieldResolver, Arg, Query } from "type-graphql";
import PostType from "../@types/post";
import { injectable, inject } from "inversify";
import PostServiceInterface from "../service/post/interface";
import ServiceID from "../identifiers/service";

@injectable()
@Resolver()
export default class PostResolver {
  @inject(ServiceID.Post) service: PostServiceInterface;

  @Query(_ => [PostType])
  async posts(): Promise<PostType[]> {
    return await this.service.findAll();
  }

  @Query(_ => PostType)
  async post(@Arg("postId") postId: number): Promise<PostType> {
    return await this.service.findById(postId);
  }
}
