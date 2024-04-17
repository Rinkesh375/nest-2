import { Module } from '@nestjs/common';
import { ProductsController, UsersController } from './users.controller';


@Module({
  imports: [],
  controllers: [UsersController,ProductsController],
  providers: [],
})
export class AppModule {}
