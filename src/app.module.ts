import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';



//
@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],// Here we are passing  UsersService as dependecies for user.controller
})
export class AppModule {}
