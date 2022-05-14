import React, { useEffect } from 'react'
import "./MainPage.css"
import Likes from '../components/Likes'
import MobXLikes from "../mobxComponents/MobXLikes"
import InputDescription from '../components/InputDescription'
import MobXInputDescription from "../mobxComponents/MobXInputDescription"
import picture from "../img/pexels-cátia-matos-1072179.jpg"
import Comments from '../components/Comments'
import MobXComments from "../mobxComponents/MobXComments"
import { useNavigate } from "react-router-dom"

function MainPage(props) {

    const switchManager = () => {
        props.setManager(props.manager === "Redux" ? "MobX" : "Redux")
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (props.manager === "Redux") {
            navigate("/")
        }
        else {
            navigate("/MobX")
        }
    }, [props.manager, navigate])

    return (
        <div className='container'>
            <div className="switchButton">
                <button onClick={switchManager} className="me-0">
                    Now you on {props.manager}
                </button>
            </div>
            <div className="row">
                <div className="col">
                    <div className='d-flex flex-column'>
                        <img src={picture} alt="error" className='mb-2' />
                        {
                            props.manager === "Redux" ? <InputDescription /> : <MobXInputDescription />
                        }
                    </div>
                    <div>
                        <div className='mt-3'>
                            {
                                props.manager === "Redux" ? <Comments /> : <MobXComments hello="hello" />
                            }
                        </div>
                    </div>
                    {
                        props.manager === "Redux" ? <Likes /> : <MobXLikes />
                    }
                </div>
            </div>
        </div>
    )
}

export default MainPage