import { ObjectType, Field, ID } from "type-graphql";
import PostTypeInterface from "./interface";

@ObjectType({ implements: PostTypeInterface })
class PostType implements PostTypeInterface {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export default PostType;
