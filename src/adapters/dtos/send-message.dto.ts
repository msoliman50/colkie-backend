import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class SendMessageDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  readonly message: string;
}
