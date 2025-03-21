import { Body } from "./body/body";
import Footer, { FooterText } from "./footer/footer";
import { Header } from "./header/header";

export const Layout = () => {
  
  return (
    <div className="app-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
