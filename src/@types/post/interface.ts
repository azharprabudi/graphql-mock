import { InterfaceType, Field, Int, ID, Arg } from "type-graphql";
import CommentTypeInterface from "../comment/interface";

@InterfaceType()
abstract class PostTypeInterface {
  @Field(_ => ID, {
    nullable: false
  })
  userId: number;

  @Field(_ => ID, {
    nullable: false
  })
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  body: string;

  @Field()
  comments: any;
}

export default PostTypeInterface;
