import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import WebServices from "./pages/WebServices";
import AboutUs from "./pages/AboutUs";
// import { Routes }  from "react-router-dom";

// function IsLogin() {
//   if (!localStorage.token) {
//     return <Navigate to={"/"}/>
//   } else {
//     return <Outlet/>  
//   }
// }

// function IsNotLogin() {
//   if (localStorage.token) {
//     return <Navigate to={"/"}/> 
//   } else {
//     return <Outlet/>
//   }
// }

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WebServices" element={<WebServices />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
