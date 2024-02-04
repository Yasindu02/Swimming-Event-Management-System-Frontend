import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Data from "./pages/Data";

import HomeWeb from "./site-pages/HomeWeb";
import AboutUsWeb from "./site-pages/AboutUsWeb";
import ServicesWeb from "./site-pages/ServicesWeb";
import WhyUsWeb from "./site-pages/WhyUsWeb";
import SubscriptionWeb from "./site-pages/SubscriptionWeb";

function App() {
  return (
    <div className="sub_page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeWeb />} />
          <Route path="about" element={<AboutUsWeb />} />
          <Route path="service" element={<ServicesWeb />} />
          <Route path="why" element={<WhyUsWeb />} />
          <Route path="subscription" element={<SubscriptionWeb  />} />
          <Route path="login" element={<Login />} />

          <Route path="dash" element={<Dashboard />}>
            <Route path="student" element={<Student />} />
            <Route path="score" element={<Home />} />
            <Route path="task" element={<Task />} />
            <Route path="saveAllToData" element={<Home />} />
            <Route path="getSavedData" element={<Data />} />
            <Route path="logout" element={<Login />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
   <Routes>
   <Route path='' element={<Login />}></Route>
    <Route path='/' element={<Dashboard />}>
      <Route path='/student' element={<Student />}></Route>
      <Route path='/score' element={<Home />}></Route>
      <Route path='/task' element={<Task />}></Route>
      <Route path='/saveAllToData' element={<Home />}></Route>
      <Route path='/getSavedData' element={<Data />}></Route>
      <Route path='/logout' element={<Login />}></Route>
    </Route>
    <Route path='/login' element={<Login />}></Route>
   </Routes>
   </BrowserRouter> */}
    </div>
  );
}

export default App;
