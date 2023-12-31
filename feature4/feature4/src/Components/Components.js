import React from "react";
// import Main from "./Main/Main.js";
import Home from "./Home/Home.js";
import Chat from "./Chat/Chat";
import Header from "./Header/Header.js";
//import Login from "./Login/Login.js";
//import Signup from "./Signup/Signup.js";
import Connect from "./Connect/Connect.js";
import YourMatches from "./YourMatches/YourMatches.js";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route
} from "react-router-dom";
import AuthModule from "./Auth/Auth.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute.js";
import MainList from "./Main/MainList.js";

const Components = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<AuthLogin />} />
        <Route path="/auth/register" element={<AuthRegister />} />
        <Route path="/auth" element={<AuthModule />} />
        <Route
          path="/buddyfinder"
          element={<ProtectedRoute><Connect /></ProtectedRoute>}
        />
        <Route
          path="/buddychatroom"
          element={<ProtectedRoute><YourMatches /></ProtectedRoute>}
        />

        <Route
          path="/"
          element={<ProtectedRoute><MainList /></ProtectedRoute>}
        />
        <Route
          path="/buddychatroom/:userId"
          element={
            <ProtectedRoute><Chat /></ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Router>
  );
};

export default Components;

