import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Singup } from "./pages/Singup";
import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import { UserProfilePage } from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <HomePage />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Singup />} />
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}> 
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfilePage />
          </Layout>
        }
      />
      </Route>
    </Routes>
  );
};
