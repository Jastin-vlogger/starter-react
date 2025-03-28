import { Outlet } from "react-router";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";

export const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
