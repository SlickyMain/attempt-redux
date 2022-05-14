import { makeAutoObservable } from "mobx"

class LikesStore {

    constructor() {
        makeAutoObservable(this)
    }

    likes = 0

    addLike() {
        this.likes += 1
    }

    removeLike() {
        this.likes -= 1
    }
}

export default new LikesStore()