export const HttpActions = {
    post: 'post',
    get: 'get',
    put: 'put',
    patch: 'patch',
    delete: 'delete'
}

export interface IRoute {
    method: string;
    route: string;
    controller: any,
    action: string;
}
