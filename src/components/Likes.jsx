import React from 'react'
import { addLike, removeLike } from '../redux/actionCreators/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

function Likes(props) {

    const dispatch = useDispatch()
    const currentLikes = useSelector(state => {
        const { likesReducer } = state
        return likesReducer.likes
    })

    const addLikeInComponent = () => {
        return dispatch(addLike())
    }

    const removeLikeInComponent = () => {
        return dispatch(removeLike())
    }

    return (
        <div className='d-flex align-items-center'>
            <button onClick={addLikeInComponent}>♡ {currentLikes}</button>
            <button onClick={removeLikeInComponent}>Dislike</button>
        </div>
    )
}

export default Likes
