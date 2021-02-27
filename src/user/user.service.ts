import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private users : Repository<User>, ){

    }

    public async getUsers(): Promise<any>{

        if(!this.users){
            throw new NotFoundException();
        }

        return await this.users.find();
    }

    public async postUser(user){
        return await this.users.insert(user);
    }

    public async getUserById(id: number): Promise<any>{
        const userId = Number(id);
        const user = await this.users.findOne(userId);

        if(!user){
            throw new NotFoundException();
        }

        return user;
    }

    public async putUserById(id: number, user: User): Promise<any>{
        const tempUser = await this.users.findOne(id);

        if(!tempUser){
            throw new NotFoundException();
        }

        await this.users.update(id, user);

        return this.users.find();
    }

    public async deleteUserById(id: number): Promise<any>{
        const user = this.users.findOne(id);

        if(!user){
            throw new NotFoundException();
        }

        await this.users.delete(id);

        return this.users.find();
    }
}
