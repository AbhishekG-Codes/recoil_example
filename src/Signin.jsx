import axios from "axios";
import { useState } from "react";
export default function Signin(props) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", {
        randomName: username,
      });
      console.log(response.data.success);
      console.log(response.data.success);
      if (response.data.success) {
        props.setIsAuth(response.data.success); 
      } else {
        setMessage("Authentication failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setMessage("An error occurred. Please try again later.");
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
      {message && <p>{message}</p>} {/* Display error or status message */}
    </>
  );
}
