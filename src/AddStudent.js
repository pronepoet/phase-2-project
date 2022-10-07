import React from "react";
function AddStudent(){
    return (
        <div className="ui segment">
          <form className="ui form">
            <div className="inline fields">
              <input type="date" name="date" />
              <input type="text" name="description" placeholder="Description" />
              <input type="text" name="category" placeholder="Category" />
              <input type="text" name="grade" placeholder="Grade" step="0.01" />
            </div>
            <button className="ui button" type="submit">
              Add Student
            </button>
          </form>
        </div>
      );
}
export default AddStudent