import { makeAutoObservable } from "mobx"

class CommentStore {
    constructor() {
        makeAutoObservable(this)
    }

    allComments = []

    addComment(comment) {
        this.allComments.push(comment)
    }

    deleteComment(id) {
        this.allComments = this.allComments.filter(comment => comment.id !== id)
    }
}

export default new CommentStore()