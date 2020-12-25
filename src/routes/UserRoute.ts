import {UserController} from "../controller/UserController";
import {HttpActions, IRoute} from "../Http-utils/http-utils";

const routeStart = '/user/'
export const UserRoute: IRoute[] = [{
    method: HttpActions.post,
    route: routeStart + 'signUp',
    controller: UserController,
    action: 'signUp'
},{
    method: HttpActions.put,
    route: routeStart + 'login',
    controller: UserController,
    action: 'login'
},]
