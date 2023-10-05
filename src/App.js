// import UseState from "./components/hooks/1 - UseState/UseState";
// import Sidemenu from "./components/hooks/1 - UseState/Sidemenu";
// import Screenwidth from "./components/hooks/2 - UseEffect/Screenwidth";
// import UseReducer from "./components/hooks/4 - UseReducer/UseReducer";
// import Formdata from "./components/hooks/5 - UseRef/Formdata";
// import GetDomElement from "./components/hooks/5 - UseRef/GetDomElement";
// import UseLayout from "./components/hooks/6 - UseLayoutEffect/UseLayout";
// import Randome from "./components/hooks/6 - UseLayoutEffect/Randome";
// import TodoApp from "./projects/TodoApp"; 
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./RactRouter.js/Home";
import About from "./RactRouter.js/About";
import Work from "./RactRouter.js/Work";
import Contect from "./RactRouter.js/Contect";
import ErrorPage from "./RactRouter.js/ErrorPage";
import Navebar from "./RactRouter.js/Navebar";
import LiteAndDarkMode from "./projects/LiteAndDarkMode";
import AutoPlay  from "./projects/Slider";
import CardwitFilter from "./projects/CardwitFilter";

function App() {
  return (
    <>

{/* <CardwitFilter/> */}





    {/* --------- for router -------- */}
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
    {/* --------- for router -------- */}
    </>
  );
}

export default App;
