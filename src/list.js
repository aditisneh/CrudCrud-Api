import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [NewUnicorn, setNewUnicorn] = useState({
    name: "",
    age: "",
    colour: ""
  });
  const [Unicorns, setUnicorns] = useState([]);
  useEffect(() => {
    axios
      .get("https://crudcrud.com/api/3c4c9b8885c94c65814b6b144c0caa7a/unicorns")
      .then((res) => {
        console.log(res.data);
        setUnicorns(res.data);
      });
  }, []);
  return (
    <div className="App">
      <select>
        {Unicorns.map((unicorn) => (
          <option key={unicorn._id}>{unicorn.name}</option>
        ))}
      </select>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          axios
            .post(
              "https://crudcrud.com/api/3c4c9b8885c94c65814b6b144c0caa7a/unicorns",
              NewUnicorn
            )
            .then(() => {
              axios
                .get(
                  "https://crudcrud.com/api/3c4c9b8885c94c65814b6b144c0caa7a/unicorns"
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
