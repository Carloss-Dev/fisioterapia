import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

interface IGridArea {
  children: ReactNode;
}

export const GridArea = ({ children }: IGridArea) => {
  return (
    <main className="grid h-screen w-screen grid-cols-12 grid-rows-[50px_1fr_100px] bg-white">
      <header className="col-span-12 row-span-1">
        <Navbar />
      </header>
      <section className="col-span-12 row-start-2 row-end-3 p-4">
        {children}
      </section>
    </main>
  );
};
