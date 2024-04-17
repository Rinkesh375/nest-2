import { Controller, Get, Post, Put, Patch, Delete, Req, HttpCode, Param, Query,Headers} from "@nestjs/common";
import { Request } from "express";


interface ParamsType {
    id: String
}

interface QueryType {
    name: string;
    price: string
}

@Controller("/users/:id")
export class UsersController {

    @Get()
    getProfile(@Param() param: ParamsType) {
        console.log(param)
        return new Promise((resolve, reject) => {
            resolve("Rinkesh")
        })
    }
}




// @Controller("/products")
// export class ProductsController{
//     @Get()
//     getProduct(@Query() query:QueryType /*This query won't do strict query type check even you can skip or pass any other query too apart from name ,price query */){
//         console.log(query)
//         return {product:"Product found"}
//     }
// }




@Controller("/products")

export class ProductsController {

    @Get()

    getProduct(@Headers() headers:any) {

        console.log(headers)
        return { product: "Product found" }

    }

}



