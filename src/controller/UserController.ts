import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {User} from "../entity/User";
import * as bcrypt from 'bcrypt'
import {IUserLoginModel} from "../view-models/IUserLoginModel";

export class UserController {

    private userRepository = getRepository(User);

    async signUp(request: Request, response: Response, next: NextFunction) {
        const user: User = request.body;
        user.password = await bcrypt.hashSync(user.password, 10);
        return this.userRepository.save(user);
    }

    async login(request: Request, response: Response, next: NextFunction) {
        const userCredentials: IUserLoginModel = request.body;
        const existingUser: User = await this.userRepository.createQueryBuilder("user")
            .where("user.email = :email", {email: userCredentials.email})
            .getOne();

        if (!existingUser) {
            return response.status(400).send('user doesnt exists')
        }

        if (!bcrypt.compareSync(userCredentials.password, existingUser.password)) {
            return response.status(400).send('Password does not match for the user');
        }
        return existingUser;
    }

}
