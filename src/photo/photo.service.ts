import { Injectable, NotFoundException, UseInterceptors } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {

    constructor(@InjectRepository(Photo) private photos: Repository<Photo>){

    }

    public async getPhotos(){

        return await this.photos;
    }

    public async postPhoto(file: Express.Multer.File){
        const name = file.originalname;
        const photo = [{
            id: 0,
            name: name,
        }];

        return await this.photos.insert(photo);
    }

    public async putPhoto(id: number, photo: Photo){
        const photoId = Number(id);
        const tempPhoto = await this.photos.findOne(photoId);
        
        if(!tempPhoto){
            throw new NotFoundException();
        }

        return await this.photos.update(id,photo);
    }

    public async deletePhoto(id: number){
        const photoId = Number(id);
        const photo = await this.photos.findOne(photoId);

        if(!photo){
            throw new NotFoundException();
        }

        return await this.photos.delete(id);
    }
}
