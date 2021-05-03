import React, {useState} from 'react';
import ShowItem from './ShowItem'
import './App.css'
var courses


const Main = () => {
    var handleClick = () => {
    
        var input = document.getElementsByClassName('input');
        courses = input[0].value
        input[0].value = ""
        setItem(courses)
    }
    const [item, setItem] = useState(0)
    return (
        <div>
            <div className = "main">
                <div className= "container">
                    <form className = "form1">
                        <label className= "label">Number of Courses : </label>
                        <input type = "number" className = "input" min = "1" max = "10" placeholder = "0" />
                        
                    </form>
                    <div>
                        <input type= "button" value = "Submit" className = "button" onClick = {handleClick}/>
                    </div>
                </div>
            </div>
            <div className = "listContainer">
                <ShowItem item = {item}/>
            </div>
        </div>
    ) 
}
export default Main;
