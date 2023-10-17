import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import AdminDashboard from "./pages/AdminDashboard";
import MyNetwork from "./pages/AdminMyNetwork";
import ContactUs from "./pages/ContactUs";
import KelasDigital from "./pages/KelasDigital";
import MemberDashboard from "./pages/Member";
import WebServices from "./pages/WebServices";
import Home from "./pages/home";
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
        <Route path="/KelasDigital" element={<KelasDigital />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/Member" element={<MemberDashboard />} />
        <Route
          path="/Member/MyNetwork"
          element={<MyNetwork downlineMembers={[]} />}
        />
      </Routes>
    </>
  );
}

export default App;
