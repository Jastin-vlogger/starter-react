import { Outlet } from "react-router";
import { Header } from "./header/header";
import Footer from "./footer/footer";

export const Layout = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
