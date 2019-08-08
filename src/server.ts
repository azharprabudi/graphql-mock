import "reflect-metadata";
import { buildTypeDefsAndResolvers } from "type-graphql";
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import RootResolvers from "./resolvers";
import container from "./utils/di";

const main: () => Promise<ApolloServer> = async (): Promise<ApolloServer> => {
  const { typeDefs, resolvers } = await buildTypeDefsAndResolvers({
    container,
    resolvers: RootResolvers
  });
  const schema = makeExecutableSchema({ typeDefs, resolvers });

  return new ApolloServer({
    schema,
    cors: true,
    tracing: true,
    debug: process.env.GQL_FAZZCRD_MODE == "production" ? false : true,
    playground: process.env.GQL_FAZZCRD_MODE == "production" ? false : true
  });
};

main()
  .then((server: ApolloServer) => {
    const port = process.env.GQL_FAZZCRD_PORT || 6060;
    server.listen(port, () => {
      console.log(`Your server already running at port ${port}`);
    });
  })
  .catch(console.error);
