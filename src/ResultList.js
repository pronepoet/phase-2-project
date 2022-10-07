import React from "react";
import Result from "./Result"
function ResultList({results}){
    return (

               <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Grade</h3>
          </th>
        </tr>
{results.map(result => {
    return <Result 
    date={result.date}
    description={result.description}
    category={result.category}
    grade={result.grade}
    key={result.id}
    />
})}
      </tbody>
    </table>
    
    )
}
export default ResultList;