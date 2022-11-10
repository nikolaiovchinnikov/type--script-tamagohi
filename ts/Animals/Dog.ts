import { Animals } from "./Animals";
import {str, num} from "../Interface"
export class Dog extends Animals{
    override readonly _nameAnimals:str = "Собака"
    override _name!:str
    override _age!:num
    override _satiety!:num
    override _sentiment!:num
    override _health!:num
    constructor(){
        super()
    }
}

