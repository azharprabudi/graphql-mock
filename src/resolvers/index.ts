import { injectable, inject } from "inversify";
import { Resolver, Query, Arg } from "type-graphql";
import ServiceID from "../identifiers/service";
import PostType from "../@types/post";
import PostServiceInterface from "../service/post/interface";

@injectable()
@Resolver()
class RootResolver {
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

export default RootResolver;
