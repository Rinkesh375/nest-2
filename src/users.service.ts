import { Injectable } from "@nestjs/common";
import { User } from "./interfaces";

type Store = {
    [key: string]: {
        name: string;
        age: number;
        id: number;
    };
};


@Injectable()
export class UsersService{
    private store:Store = {};
    
    addUser(user:User){
        this.store[user.id] = user
        
    }

    getUser(id:number){
        return this.store[id];
    }
    getUsers(){
       
        return Object.values(this.store)
    }

    updateUser(id:number,user:User){
        this.store[id] = user
    }

    deleteUser(id:number){
        delete this.store[id]
    }
}