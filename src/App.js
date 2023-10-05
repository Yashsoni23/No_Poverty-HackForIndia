
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./RactRouter.js/Home";
import About from "./RactRouter.js/About";
import Work from "./RactRouter.js/Work";
import Contect from "./RactRouter.js/Contect";
import ErrorPage from "./RactRouter.js/ErrorPage";
import Navebar from "./RactRouter.js/Navebar";


function App() {
  return (
    <>

    <BrowserRouter>
    <Navebar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/Contect" element={<Contect/>}/>
        <Route path="*" element={<ErrorPage/>}/> 
    </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
