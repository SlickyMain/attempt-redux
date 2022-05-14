import { makeAutoObservable } from "mobx"

class InputStore {
    constructor() {
        makeAutoObservable(this)
    }
    inputValue = ""
    
    setValue(newValue) {
        this.inputValue = newValue
    }
}

export default new InputStore()