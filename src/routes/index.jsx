import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../component/sign-in";
import SignUp from "../component/Sign-up";
import Dashboard from "../container/dashboard";
import Table from "../container/table";
import Layout from "../layout";
const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/table" element={<Table />} />
          </Route>
          <Route path="signIn" element={<SignIn />} />
          <Route path="signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
