import {NewsFeedController} from "../controller/NewsFeedController";
import {HttpActions, IRoute} from "../Http-utils/http-utils";

const routeStartWith = '/api/news/'
export const NewsFeedRoutes: IRoute[] = [{
    method: HttpActions.post,
    controller: NewsFeedController,
    action: 'createNewsArticle',
    route: routeStartWith + 'create/:userId'
}, {
    method: HttpActions.patch,
    controller: NewsFeedController,
    action: 'updateArticle',
    route: routeStartWith
}, {
    method: HttpActions.delete,
    controller: NewsFeedController,
    action: 'deleteArticle',
    route: routeStartWith + ':id'
}, {
    method: HttpActions.get,
    controller: NewsFeedController,
    action: 'getAllNewsListing',
    route: routeStartWith + 'newsListing'
}, {
    method: HttpActions.get,
    controller: NewsFeedController,
    action: 'getNewsInDetail',
    route: routeStartWith + 'details/:id'
}];
