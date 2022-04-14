import React from 'react'
import "./MainPage.css"
import Likes from '../components/Likes'
import InputDescription from '../components/InputDescription'
import picture from "../img/pexels-cátia-matos-1072179.jpg"
import Comments from '../components/Comments'

function MainPage(props) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <div className='d-flex flex-column'>
                        <img src={picture} alt="error" className='mb-2' />
                        <InputDescription />
                    </div>
                    <div>
                        <div className='mt-3'>
                            <Comments />
                        </div>
                    </div>
                    <Likes />
                </div>
            </div>
        </div>
    )
}

export default MainPage