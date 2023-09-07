import React from "react";
import Navigation from "./Navigation";

const LayoutContainer = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default LayoutContainer;
