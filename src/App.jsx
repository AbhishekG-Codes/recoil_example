import Home from "./Home";
import Signin from "./Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [isAuth, setIsAuth] = useState(false); 

  return (
    <>
      <BrowserRouter>
        <Routes>
          {isAuth ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<Signin setIsAuth={setIsAuth} />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}
