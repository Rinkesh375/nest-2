import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto";
const USERS = [
    {
        "name": "Niti",
        "age": 25,
        "id": 1
    },
    {
        "name": "Nitis",
        "age": 25,
        "id": 2
    },
    {
        "name": "Nitish",
        "age": 25,
        "id": 3
    }
];


@Controller("/users")
export class UserController{
    @Get()
    getAllUsers(){
        return USERS
    }

    @Post()
    createNewUser(@Body() createUserDto:CreateUserDTO){
       USERS.push(createUserDto)
       return {msg:"New User created Successfully"}
    }

    @Get(":id")
    @HttpCode(404)
    getSingleUser(@Param() param:{id:string}){
        const user = USERS.find((user)=>user.id === +param.id)
        if(!user) return {msg:"No user find by this id"}
        return user;
    }
}




