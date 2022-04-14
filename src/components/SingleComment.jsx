import React from 'react'

function SingleComment() {
    return (
        <div>
            <form className="position-relative mt-2">
                <div className='crossItem'>
                    &times;
                </div>
                <input type="text" name="isComment" />
                <input type="submit" hidden />
            </form>
        </div>
    )
}

export default SingleComment