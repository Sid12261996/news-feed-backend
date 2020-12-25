import {NextFunction, Request, Response} from "express";

export class NewsFeedController {
    async createNewsArticle(request: Request, response: Response, next: NextFunction) {
        return 'signed up'
    }

    async updateArticle(request: Request, response: Response, next: NextFunction) {
        return 'signed up'
    }

    async deleteArticle(request: Request, response: Response, next: NextFunction) {
        return 'signed up'
    }

    async getAllNewsListing(request: Request, response: Response, next: NextFunction) {
        return 'signed up'
    }

    async getNewsInDetail(request: Request, response: Response, next: NextFunction) {
        return 'signed up'
    }
}
