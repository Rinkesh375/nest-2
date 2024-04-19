import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto";
import { UsersService } from "./users.service";



@Controller("/users")
export class UsersController{
    constructor(private readonly usersService:UsersService){} // here this will check whether app.module has UsersService or not if it has that will added which we can use
    @Post()
    createUser(@Body() user:CreateUserDTO){
        this.usersService.addUser(user);
        return {message:"New User Created Successfully"}
    }

    @Get()
    findAllUsers(){
       return  this.usersService.getUsers();
    }

    @Get('/:id')
    findUser(@Param() param:{id:string}){
        return this.usersService.getUser(+param.id)

    }
    @Put("/:id")
    updateUser(@Param() param:{id:string},@Body() user:CreateUserDTO){
              this.usersService.updateUser(+param.id,user)
              return {message:"User Updated"}
    }

    @Delete("/:id")
    deleteUser(@Param() param:{id:string}){
            this.usersService.deleteUser(+param.id);
            return {message:"User Deleted Successfully"}
    }
 

}