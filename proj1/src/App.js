import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './Components/Layout/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Add from './Components/Pages/User/Add';
import Show from './Components/Pages/User/Show';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';


function App() {
  return (
   <>
   <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/add" element={<Add/>}/>
      <Route path="/show" element={<Show/>}/>
      <Route path="/update/:userId" element={<Update/>}/>
      <Route path="/delete/:userId" element={<Delete/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
