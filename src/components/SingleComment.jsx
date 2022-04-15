import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteComment } from '../redux/actionCreators/actionCreators'

function SingleComment(props) {
    const dispatch = useDispatch()

    const deleteCommentLocal = () => {
        dispatch(deleteComment(props.id))
    }

    return (
        <div>
            <form className="position-relative mt-2">
                <div className='crossItem' onClick={deleteCommentLocal}>
                    &times;
                </div>
                <input className="commentText" type="text" value={props.text} name="isComment" />
                <input type="submit" hidden />
            </form>
        </div>
    )
}

export default SingleComment