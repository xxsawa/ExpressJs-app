import { UserBuilder } from "../ProfileManagment";

export class User {
    length?: number;
    width?: number;
    wheelbase?: number;
    seatingCapacity?: number;
    name?: string;
    email?: string;
    
    constructor(builder: UserBuilder){
        this.length = builder.length ;
        this.width = builder.width ;
        this.wheelbase = builder.wheelbase ;
        this.seatingCapacity = builder.seatingCapacity ;
        this.name = builder.name ;
        this.email = builder.email ;
    }
}