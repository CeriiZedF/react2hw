


import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import User from "./User/User";
import Book from "./Book.jsx/BookF";
import Navigation from "./User/Navigation";
import BookC from "./Book.jsx/BookC";
import City from "./City/City";

function App() {
  

    
  return (
    <>
     
        <Router>
        <Navigation/>
          <Routes>
            <Route exact path="/" element={<User/>} />
            <Route exact path="/Book" element={<Book/>}></Route>
            <Route exact path="/BookC" element={<BookC/>}></Route>
            <Route exact path="/City" element={<City/>}></Route>
          </Routes>
      
        </Router>
       
  </>
  );

}
export default App;
