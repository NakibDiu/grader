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
        credArray.map((i) => {
            carr.push(i.value)
            if(i.value === ""){
                alert("Some Credits Are Missing 😛😛")
            }
            return 0
        })
        let grades = document.getElementsByClassName
        ("gradeInput")
        let gradeArray = Array.from(grades)
        let garr = []
        gradeArray.map((i) => {
            garr.push(i.value)
            if(i.value === ""){
                alert("Some Grades Are Missing 😛😛")
            }
            return 0
        })
        getResult(carr, garr)
        setArray(carr)
        setArrayG(garr)
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
        var grade = sumOfTwo / sumOfC
        setResult(grade)
    }
    const [result , setResult] = useState(0)
    const [array, setArray] = useState([])
    const [arrayG, setArrayG] = useState([])

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
            <Result grade = {result} credits = {array} grades = {arrayG}/>        
        </div>
    )
}
export default ShowItem;