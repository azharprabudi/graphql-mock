import {
  Resolver,
  FieldResolver,
  Root,
  ResolverInterface,
  Arg
} from "type-graphql";
import PostType from "../@types/post";
import { injectable, inject } from "inversify";
import PostServiceInterface from "../service/post/interface";
import ServiceID from "../identifiers/service";
import CommentType from "../@types/comment";

@Resolver(_ => PostType)
export default class PostResolver {
  @FieldResolver()
  comments(@Arg("post") post: PostType) {
    return "";
  }
}
