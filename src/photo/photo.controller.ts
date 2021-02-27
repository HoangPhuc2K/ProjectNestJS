import { Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {

    constructor(private photoService: PhotoService){

    }

    @Get()
    public findAll(){
        return this.photoService.getPhotos();
    }

    @Post('upload/:id')
    @UseInterceptors(FileInterceptor('photo',{
        dest:"./uploads",
    }))
    uploadFile(@Param('id', ParseIntPipe) id: number, @UploadedFile() photo: Express.Multer.File) {
        console.log(id);
        this.photoService.postPhoto(photo);
    }

    @Put('update/:id')
    updateFile(@Param('id', ParseIntPipe) id: number, @UploadedFile() photo: Express.Multer.File){
        
    }

    @Delete("delete")
    deleteFile(){
        
    }
}
