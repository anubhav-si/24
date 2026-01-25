import Navbar from "../src/components/navBar";
import Footer from "../src/components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
