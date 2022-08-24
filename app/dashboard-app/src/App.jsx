import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./utils/AuthProvider";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              {" "}
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
