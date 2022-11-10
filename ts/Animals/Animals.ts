import { num, str } from "../Interface";
import { Taime } from "../Taime";
export abstract class Animals {
    readonly _nameAnimals!:str
    public _name!:str
    public _age!:Taime
    public _satiety!:num
    public _sentiment!:num
    public _health!:num
    public abstract sex (percent:num):void;
}













