import React, { useState } from 'react'
import MobXSingleComment from './MobXSingleComment'
import "./MobXComments.css"
import commentStore from "../mobX/commentStore"
import { observer } from "mobx-react-lite"

const MobXComments = observer(() => {
    const [textComment, setTextComment] = useState("")

    const handleChange = (e) => {
        setTextComment(e.target.value)
    }

    let comments = commentStore.allComments

    const handleSubmit = (e) => {
        e.preventDefault()
        setTextComment("")
        if (textComment) {
            let newComment = {
                id: comments.length + 1,
                text: textComment
            }
            commentStore.addComment(newComment)
        }
    }

    return (
        <div>
            <form className='mb-5' onSubmit={handleSubmit}>
                <input type="text" value={textComment} onChange={handleChange} name="addComment" />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(comment => {
                return <MobXSingleComment key={comment.id} text={comment.text} id={comment.id} />
            })}
        </div>
    )
})

export default MobXComments