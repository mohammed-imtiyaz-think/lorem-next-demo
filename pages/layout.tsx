import React from "react";
import Header from "../components/header/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black">
      <Header />
      <main>{children}</main>
    </div>
  );
}
