import {NewsFeedRoutes} from "./routes/NewsFeedRoutes";
import {UserRoute} from "./routes/UserRoute";
import {IRoute} from "./Http-utils/http-utils";

export const Routes: IRoute[] = [...UserRoute, ...NewsFeedRoutes,]
