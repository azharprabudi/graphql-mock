import { ObjectType, ID, Field } from "type-graphql";
import CommentTypeQuery from "../comment/query";

@ObjectType()
class PostTypeQuery {
  @Field(type => ID, { nullable: false })
  id: number;

  @Field(type => ID, { nullable: false })
  userId: number;

  @Field(type => ID, { nullable: false })
  title: string;

  @Field(type => ID, { nullable: false })
  body: string;

  @Field(type => [CommentTypeQuery], { nullable: false })
  comments: CommentTypeQuery[];
}

export default PostTypeQuery;
