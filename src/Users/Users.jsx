import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
      async function fetchUsers() {
        try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      }
    catch(err){
        setError(err.response.data.message)
    }
    }
    fetchUsers();
  }, []);
  return <div>
    <h1>USERS :</h1>
    {error?<p>{error}</p>:
    <ul>
        {users.map((user)=>
    <li key={user.id}>{user.name}</li>
    )}
    </ul>
    }
  </div>;
}

export default Users;
