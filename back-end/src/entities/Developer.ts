import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Developer {
    constructor(name:string, gender:string, age:number, birthDate:string, hobby:string ){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.birthDate = birthDate;
        this.hobby = hobby;
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    gender: string;

    @Column()
    age: number; 

    @Column()
    birthDate: string; 

    @Column()
    hobby: string;

}
