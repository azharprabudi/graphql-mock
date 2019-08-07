import { ObjectType } from "type-graphql";
import CommentTypeInterface from "./interface";

@ObjectType()
class CommentType implements CommentTypeInterface {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default CommentType;
