import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty({
        description: 'The id of user',
        type: Number,
    }) 
    readonly id: number;
    
    @ApiProperty({
        description: 'The name of user',
        type: String,
    })
    readonly name: string;

    @ApiProperty({
        description: 'The age of a user',
        minimum:1,
        default:1,
    })
    readonly age: string;
}

export class UpdateUserDto{

    @ApiProperty({
        type: Number,
    }) 
    readonly id: number;
    
    @ApiProperty()
    readonly name: string;

    @ApiProperty({
        description: 'The age of a user',
        minimum:1,
        default:1,
    })
    readonly age: string;
}