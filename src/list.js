import axios from "axios";
import { useEffect, useState } from "react";
import {Table} from 'react-bootstrap';
import "./App.css";

export default function List() {
  const [NewUnicorn, setNewUnicorn] = useState({
    name: "",
    age: "",
    colour: ""
  });
  const [Unicorns, setUnicorns] = useState([]);
  const [singleUnicorn,setSingleUnicorn] = useState([]);
  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/63d0b16c2a9a463bb0cbd975342e4832/unicorns")
      .then((res) => {
        console.log(res.data);
        setUnicorns(res.data);
      });
  }, []);

  const onddlChange = (event)=>{
    alert(event.target.value)
     axios
         .get("https://crudcrud.com/api/63d0b16c2a9a463bb0cbd975342e4832/unicorns/" +event.target.value)
         .then((res) => setSingleUnicorn(res.data))
         .then((error)=>console.log(error));
   };

  return (
    <div className="App">
      
<select className="form-control col-md-3" onChange= {onddlChange} >
        {Unicorns.map((unicorn) => (
          <option key={unicorn._id}>{unicorn.name}</option>
        ))}
      </select>
      
      
      <Table striped bordered hover>
        <thead>
          <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Color</td>
          </tr>
        </thead>
            <tbody>
              {
              <tr>
                <td>
                  {singleUnicorn._id}
                </td>
                <td>
                  {singleUnicorn.name}
                </td>
                <td>
                  {singleUnicorn.age}
                </td>
                <td>
                  {singleUnicorn.colour}
                </td>
              </tr>
             }
            </tbody>

          
        
      </Table>  
      
      
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              "https://crudcrud.com/api/63d0b16c2a9a463bb0cbd975342e4832/unicorns",
              NewUnicorn
            )
            .then(() => {
              axios
                .get(
                  "https://crudcrud.com/api/63d0b16c2a9a463bb0cbd975342e4832/unicorns"
                )
                .then((res) => {
                  console.log(res.data);
                  setNewUnicorn({
                    name: "",
                    age: "",
                    colour: ""
                  });
                  setUnicorns(res.data);
                });
            });
        }}
      >
        {Object.keys(NewUnicorn).map((unicorn) => (
          <input
            key={unicorn}
            placeholder={"Enter " + unicorn + "..."}
            value={NewUnicorn[unicorn]}
            onChange={(e) => {
              setNewUnicorn({
                ...NewUnicorn,
                [unicorn]: e.target.value
              });
            }}
          />
        ))}
        <input
          type="submit"
          disabled={
            NewUnicorn.name.trim().length === 0 ||
            NewUnicorn.age.trim().length === 0 ||
            NewUnicorn.colour.trim().length === 0
          }
        />
      </form>
      <pre>{JSON.stringify({ NewUnicorn, Unicorns }, null, 2)}</pre>
    </div>
  );
}


