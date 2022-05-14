import React from 'react'
import inputStore from "../mobX/inputStore"
import { observer } from "mobx-react-lite"

const MobXInputDescription = observer(() => {
    return (
        <div>
            <input type="text" value={inputStore.inputValue} onChange={(e) => { inputStore.setValue(e.target.value) }} name="desc" id="desc" />
            <p>{inputStore.inputValue}</p>
        </div>
    )
})

export default MobXInputDescription