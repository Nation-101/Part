import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />   {/* <- this is where child pages (Dashboard, Events, etc.) will render */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
