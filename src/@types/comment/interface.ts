import { Int, Field, InterfaceType, ID } from "type-graphql";

@InterfaceType()
class CommentTypeInterface {
  @Field(_ => Int, { nullable: false })
  postId: number;

  @Field(_ => ID, { nullable: false })
  id: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  body: string;
}

export default CommentTypeInterface;
