import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
