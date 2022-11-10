import { num } from "./Interface";
import {App } from "./main"

export class Randomincident {
    public intoxication = (app:App,percent:num):void => {
        if(Randomincident.getRandom(1,100) <= percent){
            app.health -= 20
            app.satiety -= 10
            app.sentiment -= 10
            alert("Кот отравился")
        }
    }
    public damage = (app:App,percent:num):void => {
        if(Randomincident.getRandom(1,100) <= percent){
            app.health -= 10
            app.satiety -= 20
            app.sentiment -= 20
            alert("Животное травмировалось")
        }
    }
    public static getRandom = (min:num,max:num) => { 
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    public defectiveMedicine = (app:App,percent:num):void => {
        if(Randomincident.getRandom(1,100) <= percent){
            app.health -= 0
            app.satiety -= 20
            app.sentiment -= 10
            alert("У лекарства истек срок годности ")
        }
    }
    public died = (app:App,percent:num):void => {
        if(Randomincident.getRandom(1,1000) <= percent){
            app.health -= 1000
            app.satiety -= 1000
            app.sentiment -= 1000
            alert("Умер")
        }
    }
}