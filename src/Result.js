import React from "react";
function Result({names,description,category,grade}){
    return(
       
            <tr>
                <td>{names}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{grade}</td>
            </tr>
      
    )
}
export default Result;