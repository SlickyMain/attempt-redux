import React from 'react'
import { inputDescription } from '../redux/actionCreators/actionCreators'
import { useDispatch, useSelector } from 'react-redux'

function InputDescription(props) {

    const dispatch = useDispatch()
    const currentValue = useSelector(state => {
        const { descriptionReducer } = state
        return descriptionReducer.value
    })

    const handleInput = (e) => {
        dispatch(inputDescription(e.target.value))
    }

    return (
        <div>
            <input type="text" onChange={handleInput} name="desc" id="desc" />
            <p>{currentValue}</p>
        </div>
    )
}

export default InputDescription