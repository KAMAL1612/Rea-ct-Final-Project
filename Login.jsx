import React, { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (event) => {
event.preventDefault();
console.log("Submitted", username, password);
// Perform login logic here
};

return (
<div className="App">
<h1>Login Page</h1>
<form onSubmit={handleSubmit}>
<label>
Username:
<input
type="text"
value={username}
onChange={(event) => setUsername(event.target.value)}
/>
</label>
<br />
<label>
Password:
<input
type="password"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>
</label>
<br />
<Link to="/Post">
          <button className="next1" type="submit">Login</button>
        </Link>
</form>

</div>
);
}

export default Login;