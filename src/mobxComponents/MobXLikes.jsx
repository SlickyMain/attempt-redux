import React from 'react'
import likesStore from "../mobX/likesStore"
import { observer } from "mobx-react-lite"

const MobXLikes = observer(() => {
    const addLike = () => {
        likesStore.addLike()
    }

    const removeLike = () => [
        likesStore.removeLike()
    ]
    return (
        <div className='d-flex align-items-center'>
            <button onClick={addLike} >♡ {likesStore.likes}</button>
            <button onClick={removeLike} >Dislike</button>
        </div>
    )
})

export default MobXLikes
