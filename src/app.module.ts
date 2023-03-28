import { Module } from '@nestjs/common';
import { RoomsController, UsersController } from './adapters/controllers';

@Module({
  imports: [],
  controllers: [RoomsController, UsersController],
  providers: [],
})
export class AppModule {}
