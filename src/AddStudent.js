import React, {useState}from "react";
function AddStudent(onSubmision){
  // control the form
const [formData, setformData] = useState({
  names:"",
  category:"",
  grade:"",
  description:""

})
  function handleSubmit(){
    onSubmision()
  }
function handleChange(){
  setformData({...formData, [e.target.name]:e.target.name})
}

    return (
        <div className="ui segment">
          <form onChange={handleChange} onSubmit={handleSubmit} className="ui form">
            <div className="inline fields">
              <input value={formData.names} type="text" name="name" />
              <input value={formData.description}type="text" name="description" placeholder="Description" />
              <input type={formData.category} name="category" placeholder="Category" />
              <input type={formData.grade} name="grade" placeholder="Grade" step="0.01" />
            </div>
            <button className="ui button" type="submit">
              Add Student
            </button>
          </form>
        </div>
      );
}
export default AddStudent;