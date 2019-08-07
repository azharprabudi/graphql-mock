import { Container } from "inversify";
import { AxiosInstance } from "axios";
import PostService from "../service/post";
import PlaceholderClient from "../httpclient/jsonplaceholder";
import PlaceholderAPIInterface from "../api/jsonplaceholder/interface";
import PlaceholderAPI from "../api/jsonplaceholder";
import PostServiceInterface from "../service/post/interface";
import HTTPClientID from "../identifiers/httpclient";
import APIID from "../identifiers/api";
import PostResolver from "../resolvers/post";
import RootResolver from "../resolvers/index";
import ServiceID from "../identifiers/service";

const container = new Container();
container
  .bind<AxiosInstance>(HTTPClientID.PlaceholderHTTPClient)
  .toFunction(PlaceholderClient);
container
  .bind<PlaceholderAPIInterface>(APIID.Placeholder)
  .to(PlaceholderAPI)
  .inSingletonScope();
container
  .bind<PostServiceInterface>(ServiceID.Post)
  .to(PostService)
  .inSingletonScope();
container.bind<RootResolver>(RootResolver).toSelf();
// container.bind<PostResolver>(PostResolver).toSelf();

export default container;
