import { Dog } from "./Animals/Dog";
import { Animals } from "./Animals/Animals";
import { str ,num, bool } from "./Interface";
import { Taime } from "./Taime";

class App {
    private _essence!:Animals;//СВОЙСТВА сущьностИ является открытЫМИ но изменить ИХ можно только в классе APP
    private _essenceOjects:Animals[] 
    constructor(listAnimals:Animals[]){
        this._essenceOjects = listAnimals
        
    }
    private setEssence = (name:str) => {
        this._essence._name = name
        this._essence._age = new Taime()
        this._essence._health = 0
        this._essence._satiety = 0
        this._essence._sentiment = 0
    }
    public getAnimals = () => {
        //метод иницализируется при создании животного ,пользователю предлогают выбрать животное из _essenceOjects
        //затем ввод проходит проверки и при правильном вводе в свойсво _essence добовляется обьект из класса Animals
        // и вызывается метод setEssence .который ставит все свойства в дефолт
        if (this._essenceOjects.length > 0){
            let inpunStr:str = "Выберите животное\n"
            for (let i = 0; i < this._essenceOjects.length; i++) {
                inpunStr += i + "  =  "+ this._essenceOjects[i]._nameAnimals + "\n"
            }
            const userChoce:str|null = prompt (inpunStr)
            if(userChoce === null){
                alert("ошибка")
                return true
            }
            const index = parseInt(userChoce)
            if(!isNaN(index) && index < this._essenceOjects.length  && index >= 0){
                this._essence = this._essenceOjects[index]
                const name = prompt("Введите имя питомца")
                if(name !== null){
                    this.setEssence(name)
                    return false
                }else{
                    this.setEssence("Питомец")
                    return true
                }
            }
            else{
                alert("повторите ввод")
                return true
            }
        }
        else{
            alert("Добавте минимум 1 обьект класса Анимал в приложение ")
            return true
        }
    }


    public feed = () => {
        if(this._essence._age.taim <= 5) {this.actions(10, 10, 10)}
        else if ( this._essence._age.taim <= 10) {this.actions(5, 5, 5)}
        else {this.actions(2, 2, 2,)}
    }
    public play = () => {
        if(this._essence._age.taim <= 5) {this.actions(-10, 10, 10)}
        else if ( this._essence._age.taim <= 10) {this.actions(5, 5, 5)}
        else {this.actions(2, 2, 2,)}
    }
    public doctor = () => {
        if(this._essence._age.taim <= 5) {this.actions(0, 10, 10)}
        else if ( this._essence._age.taim <= 10) {this.actions(5, 5, 5)}
        else {this.actions(2, 2, 2,)}
    }
    private actions = (sat:num, sent:num, heal:num) => {
        this._essence._satiety += sat
        this._essence._sentiment += sent
        this._essence._health += heal
    }


    public get name () {
        return this._essence._name
    }
    public get age () {
        return this._essence._age
    }
    public get health () {
        return this._essence._health
    }
    public get satiety () {
        return this._essence._satiety
    }
    public get sentiment () {
        return this._essence._sentiment
    }
}







const getStringInputAndStatistic = () => {
    return `
    Статистика по ${app.name}
    лет = ${app.age.taim}
    Сытность = ${app.satiety}
    Настроение = ${app.sentiment}
    Здоровье = ${app.health}
    Введите команду -
    1  =  Кормить
    2  =  Играть
    3  =  Лечить`
}

const listAnimals:Animals[] = [new Dog]
const app:App = new App(listAnimals)
let start:bool = true
enum dictComand {
    feed = 1,
    play ,
    doctor 
} 

while (true) {
    if(start){
        start = app.getAnimals()
    }
    else if(!start){
        let userComand = prompt(getStringInputAndStatistic())
        switch(userComand){
            case dictComand.feed + "":
                app.feed()
                break
            case dictComand.play + "":
                app.play()
                break
            case dictComand.doctor + "":
                app.doctor()
                break
        }
        app.age.taim = 1
    }
    
}







