import React from "react";

import Search from "./Search";
import AddStudent from "./AddStudent";
import { useEffect, useState } from "react";
function ResultContainer(){
    const [results, setResults] = useState([])
    useEffect(()=>{ //fetching the data
        fetch('http://localhost:3001/results')
        .then(resp => console.log(resp))
    },[])
return (
    <div>
       
    </div>
)
}
export default ResultContainer