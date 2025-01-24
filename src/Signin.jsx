import axios from "axios";
import { useState } from "react";
export default function Signin(props) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://globalbackend-tv09.onrender.com/", {
        randomName: username,
      });
      console.log(response.data.success);
      console.log(response.data.success);
      if (response.data.success) {
        props.setIsAuth(response.data.success); 
      } else {
        setMessage("auth failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("somethign went wrong");
    }
    setUsername(""); 
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input type="submit" value="Sign In" />
      </form>
      {message && <p>{message}</p>}
    </>
  );
}
