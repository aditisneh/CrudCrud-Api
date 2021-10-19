import React, {useState, useEffect } from "react";
import axios from "axios";

function List(){

    const [unicorn, setUnicorns] = useState([]);
    const [uniorn, setUniorns] = useState([]);

    useEffect(function() {
        axios
        .get("https://crudcrud.com/api/e5f22d4efa814621a47c83b05dc3308d")
        .then((response)=>setUnicorns(response.data))
        .then((error)=> console.log(error));
    }, [])

    return(
        <div>
        <select>
            {
            unicorn.map(unicorn => 
                
                <option value = {unicorn._id}>{unicorn.name}</option>
                )
            }
        </select>
        <select>
        {
        uniorn.map(uniorn => 
            
            <option value = {uniorn._id}>{uniorn.name}</option>
            )
        }
    </select>
        </div>
    );
}
export default List;