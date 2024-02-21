import {useState} from "react";

function State(){
const [data,setData] = useState("Mayur");
function updateData(){
    setData("Bhardwaj");
}
    return(
        <div className="App">
        <h1>{data}</h1>
   <button onClick={updateData}>Update Data</button>
   {/* <button onClick={()=>alert("Bhardwaj")}>Update Data</button>  */}
        </div>
    )
}

export default State;