import { InterfaceType, Field, Int, ID } from "type-graphql";

@InterfaceType()
abstract class PostTypeInterface {
  @Field(_ => ID, {
    nullable: false
  })
  userId: number;

  @Field(_ => Int, {
    nullable: false
  })
  id: number;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  body: string;
}

export default PostTypeInterface;
