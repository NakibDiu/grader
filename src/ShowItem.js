import React, {useState} from 'react';
import Tbody from './Tbody'
import Result from './Result'
import './ShowItem.css'

const ShowItem = (props) => {
    const style = {
        display: "block"
    }
    if(props.item <=0) {
        style.display = "none"
    }
    const getInputs = () => {
        let credits = document.getElementsByClassName("creditInput")
        let credArray = Array.from(credits)
        let carr = []
        credArray.map((i) => carr.push(i.value))
        
        
        let grades = document.getElementsByClassName
        ("gradeInput")
        let gradeArray = Array.from(grades)
        let garr = []
        gradeArray.map((i) => garr.push(i.value))
        getResult(carr, garr)
    }
    
    var getResult = (carr, garr) => {
        var sumOfC = 0
        let mul
        let sumOfTwo = 0
        for(let i = 0 ; i < props.item ; i ++) {
            sumOfC += parseInt(carr[i])
            mul = parseInt(carr[i]) * parseFloat(garr[i])
            sumOfTwo += mul
        }
        console.log(sumOfTwo)
        console.log(sumOfC)
        var grade = sumOfTwo / sumOfC
        setResult(grade)
    }
    const [result , setResult] = useState(0)
    return(
        <div className = "main2">
            <table border = "2" className = "table">
                <tr className ="header">
                    <th className = "tableHeader">Courses </th>
                    <th className = "tableHeader">Credit</th>
                    <th className = "tableHeader">Grade</th>
                </tr>
                <Tbody listItem = {props.item}/>
            </table>
            <div className= "buttonContainer">
                <button className = "btn" style = {style} onClick = {getInputs}>See Your Grade</button>
            </div>
            <Result grade = {result}/>        
        </div>
    )
}
export default ShowItem;