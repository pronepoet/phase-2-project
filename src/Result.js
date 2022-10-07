import React from "react";
function Result({name,description,category,grade}){
    return(
       
            <tr>
                <td>{name}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{grade}</td>
            </tr>
      
    )
}
export default Result;