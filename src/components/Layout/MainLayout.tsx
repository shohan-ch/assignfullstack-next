import React from "react";
import Header from "./Header";
import { FC } from "react";
type LayputtProps = {
  children: React.ReactNode;
};
const MainLayout: FC<LayputtProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
