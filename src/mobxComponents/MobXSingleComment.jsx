import React from 'react'
import commentStore from "../mobX/commentStore"

function MobXSingleComment(props) {

    const deleteCommentMobX = () => {
        commentStore.deleteComment(props.id)
    }

    return (
        <div>
            <form className="position-relative mt-2">
                <div className='crossItem' onClick={deleteCommentMobX}>
                    &times;
                </div>
                <input className="commentText" type="text" value={props.text + " mobX"} readOnly name="isComment" />
                <input type="submit" hidden />
            </form>
        </div>
    )
}

export default MobXSingleComment