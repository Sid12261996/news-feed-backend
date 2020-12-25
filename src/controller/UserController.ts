import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import * as bcrypt from 'bcrypt'

export class UserController {

    private userRepository = getRepository(User);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOne(request.params.id);
        await this.userRepository.remove(userToRemove);
    }

    async signUp(request: Request, response: Response, next: NextFunction) {
        const user: User = request.body;
        user.password = await bcrypt.hashSync(user.password, 10);
        return this.userRepository.save(user);
    }

    async login(request: Request, response: Response, next: NextFunction) {
        return 'signed up'
    }

}
