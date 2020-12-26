import {NextFunction, Request, Response} from "express";
import {getRepository} from "typeorm";
import {NewsFeed} from "../entity/NewsFeed";
import {User} from "../entity/User";

export class NewsFeedController {
    private newsFeedRepository = getRepository(NewsFeed);
    private userRepository = getRepository(User);

    async createNewsArticle(request: Request, response: Response, next: NextFunction) {
        request.body['user'] = await this.userRepository.findOne(request.params.userId);
        return this.newsFeedRepository.save(request.body);
    }

    async updateArticle(request: Request, response: Response, next: NextFunction) {
        return this.newsFeedRepository.createQueryBuilder()
            .update(NewsFeed)
            .set(request.body)
            .where("id = :id", {id: request.body.id})
            .execute();
    }

    async deleteArticle(request: Request, response: Response, next: NextFunction) {
        try {
            let newsToRemove = await this.newsFeedRepository.findOne(request.params.id);
            return await this.newsFeedRepository.remove(newsToRemove);
        } catch (e) {
            response.status(400).send(e)
        }
    }

    async getAllNewsListing(request: Request, response: Response, next: NextFunction) {
        return this.newsFeedRepository.find({relations: ['user']});
    }

    async getNewsInDetail(request: Request, response: Response, next: NextFunction) {
        try {
            const news = await this.newsFeedRepository.findOne(request.params.id);
            if (!news) {
                return response.status(400).send('No news for the given Id')
            }
            return news;
        } catch (e) {
            response.status(400).send(e)
        }
    }
}
