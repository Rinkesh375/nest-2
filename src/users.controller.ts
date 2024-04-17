import { Controller, Get,Post,Put,Patch,Delete, Req, HttpCode } from "@nestjs/common";
import { Request } from "express";

@Controller("/users")
export class UsersController {

    @Get("/profile")
    @HttpCode(200) //Even though nest-js by default pass the stauts code for get,post,put,patch,delete but you pass your custom httpcode too for get,put,patch etc;
    getProfile(@Req() req:Request){
        // console.log(req.params)
        return new Promise((resolve,reject)=>{
            resolve("Rinkesh")
        })
    }
    }
