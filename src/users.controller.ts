import { Controller, Get,Post,Put,Patch,Delete, Req } from "@nestjs/common";
import { Request } from "express";

@Controller("/users")
export class UsersController {

    @Get("/profile")
    getProfile(@Req() req:Request){
        // console.log(req.params)
        return new Promise((resolve,reject)=>{
            resolve("Rinkesh")
        })
    }
    }
