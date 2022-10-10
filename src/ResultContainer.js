import React from "react";
import Search from "./Search";
import AddStudent from "./AddStudent";
import { useEffect, useState } from "react";
import ResultList from "./ResultList";
function ResultContainer(){
    const [results, setResults] = useState([])
    useEffect(()=>{ //fetching the data
        fetch('http://localhost:3000/results')
        .then(resp => resp.json())
        .then(resul => setResults(resul))
    },[])
    function handleUpdate(newTransaction){
        console.log(newTransaction)
    }
return (
    <div>
       <Search />
       <AddStudent onSubmison={handleUpdate}/>
       <ResultList results={results}/>
    </div>
)
}
export default ResultContainer;