import { Dog } from "./Animals/Dog";
import { Animals } from "./Animals/Animals";
import { str ,num } from "./Interface";
const listAnimals:Animals[] = [new Dog]
class App {
    private _essenceOjects:Animals[] 
    private _essence!:Animals;//СВОЙСТВА сущьностИ является открытЫМИ но изменить ИХ можно только в классе APP
    constructor(animal:Animals[]){
        this._essenceOjects = listAnimals
    }
    private setEssence = (name:str) => {
        this._essence._name = name
        this._essence._age = 0
        this._essence._health = 0
        this._essence._satiety = 0
        this._essence._sentiment = 0
        this._essence._name
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
                return "ошибка"
            }
            const index = parseInt(userChoce)
            if(!isNaN(index) && index < this._essenceOjects.length  && index >= 0){
                this._essence = this._essenceOjects[index]
                const name = prompt("Введите имя питомца")
                if(name !== null){
                    this.setEssence(name)
                }
            }
            else{
                alert("повторите ввод")
                return
            }
        }
        else{
            alert("Добавте минимум 1 обьект класса Анимал в приложение ")
        }
    }
    }
    

    



const app:App = new App(listAnimals)
app.getAnimals()



// console.log()