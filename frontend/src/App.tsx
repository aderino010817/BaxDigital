import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import WebServices from "./pages/WebServices";
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
      </Routes>
    </>
  );
}

export default App;
