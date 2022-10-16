import { BrowserRouter, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import { Dashboard, SignIn, SignUp, Table } from "../containers";
=======
import Dashboard from "../container/dashboard";
import SignIn from "../container/sign-in";
import SignUp from "../container/Sign-up";
import Table from "../container/table";
>>>>>>> 91254e2da732115cc9e6412e23eb799785d379ca
import Layout from "../layout";
import { routes } from "../utils";
import ProtectedRoute from "./protected-route";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path={routes.dashboard} element={<Dashboard />} />
          <Route path={routes.table} element={<Table />} />
        </Route>
        <Route path={routes.login} element={<SignIn />} />
        <Route path={routes.register} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
