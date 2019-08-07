import { ObjectType, Field } from "type-graphql";
import PostTypeInterface from "./interface";

// @ObjectType({ implements: PostTypeInterface })
class PostType implements PostTypeInterface {
  @Field()
  id: number;
  @Field()
  userId: number;
  @Field()
  title: string;
  @Field()
  body: string;
  @Field()
  comments: any;
}

export default PostType;
