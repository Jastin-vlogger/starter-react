import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import Footer from "./Footer/Footer";

export const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
