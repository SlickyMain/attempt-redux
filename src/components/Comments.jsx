import React, { useState } from 'react'
import SingleComment from './SingleComment'
import "./Comments.css"
import { createComment } from '../redux/actionCreators/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

function Comments(props) {
    const [textComment, setTextComment] = useState()
    const dispatch = useDispatch()


    const handleChange = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createComment(textComment, "id" + Date.now()))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='mb-5'>
                <input type="text" value={textComment} onChange={handleChange} name="addComment" />
                <input type="submit" hidden />
            </form>
            <SingleComment />
        </div>
    )
}

export default Comments