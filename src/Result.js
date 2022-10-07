import React from "react";
function Result({date,description,category,grade}){
    return(
       
            <tr>
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{grade}</td>
            </tr>
      
    )
}
export default Result;