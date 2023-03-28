import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoomDto, AddUserToRoomDto, SendMessageDto } from '../dtos';

@Controller('rooms')
export class RoomsController {
  constructor() {}

  @Post()
  async createRoom(@Body() createRoomDto: CreateRoomDto) {}

  @Post(':id/users')
  async addUserToRoom(
    @Param('id') id: string,
    @Body() addUserToRoomDto: AddUserToRoomDto,
  ) {}

  @Get(':id/messages')
  async getMessages(@Param('id') id: string) {}

  @Post(':id/messages')
  async sendMessage(
    @Param('id') id: string,
    @Body() sendMessageDto: SendMessageDto,
  ) {}
}
