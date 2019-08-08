import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
class CommentTypeQuery {
  @Field(type => ID, { nullable: false })
  postId: number;

  @Field(type => ID, { nullable: false })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  body: string;
}

export default CommentTypeQuery;
