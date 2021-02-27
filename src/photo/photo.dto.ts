import { ApiProperty } from "@nestjs/swagger";

export class CreatePhotoDto{

    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

}