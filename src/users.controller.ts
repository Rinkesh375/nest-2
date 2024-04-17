import { Controller, Get, Post, Put, Patch, Delete, Req, HttpCode, Param, Query,Headers, Body} from "@nestjs/common";
import { Request } from "express";

interface bodyType{
    name:string;
    age:number;
    learning:string;
}



@Controller("/users")
export class UsersController {

    @Post()
    addNewUser(@Body() body:bodyType){
          console.log(body)
          return {message:"New User added"};
    }
}




