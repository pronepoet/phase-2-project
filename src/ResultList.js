import React from "react";
import Result from "./Result"
function ResultList(){
    return (
        <div>
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

      </tbody>
    </table>
        </div>
    )
}
export default ResultList;