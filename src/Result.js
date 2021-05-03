import React from 'react'
import './ShowItem.css'

const Result = (props) => {
    const style = {
        display: "block",
    }
    if(props.grade <= 0) {
        style.display = "none"
    }
    return(
        <>
            <div style = {style} className = "resultContainer">
                <div className = "cardMedia">
                    <div className = "cardText">
                        <h1 className = "span">Congratulation!</h1>
                        <h1 className = "text">Your Grade is <span className = "result">{props.grade.toFixed(2)}</span>
                        </h1> 
                    </div>
                </div>
                                    
            </div>
        </>
    )
}
export default Result;