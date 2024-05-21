import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="border-b border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
