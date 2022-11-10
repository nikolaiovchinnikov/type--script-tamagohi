import { Animals } from "./Animals";
import {str, num} from "../Interface"
import { Taime } from "../Taime";
import { Randomincident } from "../Randomnicity";
export class Dog extends Animals{
    override readonly _nameAnimals:str = "Собака"
    override _name!:str
    override _age!:Taime
    override _satiety!:num
    override _sentiment!:num
    override _health!:num
    public sex = (percent:num):void => {
        if(Randomincident.getRandom(1,100) <= percent){
            this._health += 10
            this._satiety -= 30
            this._sentiment += 50
            alert('Размножается ')
        }
    }
}
