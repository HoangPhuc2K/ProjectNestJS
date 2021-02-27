import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse} from '@nestjs/swagger';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    public async findAll(){

        return this.userService.getUsers();
    }

    @Post()
    @ApiCreatedResponse({
        description: 'The record has been successfuly created',

        type: CreateUserDto,
    })
    @ApiForbiddenResponse({
        description: 'Forbidden',
    })
    public async createUser(@Body() user: CreateUserDto ){

        return this.userService.postUser(user);
    }

    @Delete(':id')
    @ApiCreatedResponse({
        description: 'This record has been successfuly deleted',
    })
    public async delete(@Param('id',ParseIntPipe) id: number){
        
        return this.userService.deleteUserById(id);
    }

    @Put(':id')
    public async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<any>{

        return this.userService.putUserById(id, user);
    }

    @Get(':id')
    @ApiNotFoundResponse({
        status: 404,
        description: 'A user with the specified ID was not found',
    })
    public async findOne(@Param('id', ParseIntPipe) id: number){

        return this.userService.getUserById(id);
    }
}
