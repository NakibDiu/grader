import React from 'react'

const Tbody = (props) => {
        const rowLimit = props.listItem
        const handleCredit= (e) => {
            if(e.target.value > 4.0) {
                alert("Credit Can't be larger than 4")
                e.target.value = ""
            } else if(e.target.value <= 0) {
                alert("Credit must be greater that 0")
                e.target.value = ""
            }
        }
        const handleGrade= (e) => {
            if(e.target.value > 4.0) {
                alert("Grade Can't be larger than 4.0")
                e.target.value = ""
            } else if(e.target.value <= 0) {
                alert("Grade must be greater that 0")
                e.target.value = ""
            }
        }
        return(
            <>
            {
                Array.from({length: rowLimit}, (_,k) => (
                    <tr className = "list">
                        <td className = "tableText">Course {k + 1}</td>
                        <td className = "tableText"><input type = "number" className = "creditInput" placeholder = "Enter Credit Hours" step = "1" onInput = {handleCredit}/></td>
                        <td className = "tableText"><input type = "number" className = "gradeInput"  placeholder = "Enter Your Grade" step = "0.01" min = "1" max = "4" onInput = {handleGrade} /></td>
                    </tr>
                ))
            }
            </>
        )
}
export default Tbody;