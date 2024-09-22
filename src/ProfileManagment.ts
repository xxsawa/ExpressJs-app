import { User } from "./Models/User";

export class ProfileManagment {
    static counter = 0;

    static userFactory(): User{
        return {
            length: 0,
            width: ProfileManagment.counter += 1,
            wheelbase: 0,
            seatingCapacity: 0,
            name: "",
            email: "",
        } as User;
    }
}

export class UserBuilder {
    length?: number;
    width?: number;
    wheelbase?: number;
    seatingCapacity?: number;
    name?: string;
    email: string;

    constructor(email: string){
        this.email = email
    }

    setLength(length: number): this{
        this.length = length
        return this;
    }
    setWidth(width: number): this{
        this.width = width
        return this;
    }
    setWheelbase(wheelbase: number): this{
        this.wheelbase = wheelbase
        return this;
    }
    setSeatingCapacity(seatingCapacity: number): this{
        this.seatingCapacity = seatingCapacity
        return this;
    }
    setName(name: string): this{
        this.name = name
        return this;
    }

    build() :User{
        return new User(this); 
    }
}