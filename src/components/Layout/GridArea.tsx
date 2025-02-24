import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface IGridArea {
  children: ReactNode;
}

export const GridArea = ({ children }: IGridArea) => {
  return (
    <main className="grid h-screen w-screen grid-cols-12 grid-rows-[100px_minmax(0,_1fr)_100px] bg-white pt-10">
      <Navbar />
      <section className="row-start-2 row-end-3">{children}</section>
    </main>
  );
};
