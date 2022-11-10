import { num } from "./Interface"
export class Taime {
    private _taim:num = 1
    get taim () {
        return this._taim
    }
    set taim (leter:num) {
        this._taim += leter

    }
}