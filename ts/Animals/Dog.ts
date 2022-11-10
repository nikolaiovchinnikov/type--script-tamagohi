import { Animals } from "./Animals";
import {str, num} from "../Interface"
import { Taime } from "../Taime";
export class Dog extends Animals{
    override readonly _nameAnimals:str = "Собака"
    override _name!:str
    override _age!:Taime
    override _satiety!:num
    override _sentiment!:num
    override _health!:num
    constructor(){
        super()
    }
}

