import type { ReactNode } from "react";

interface IGridArea {
  children: ReactNode;
}

export const GridArea = ({ children }: IGridArea) => {
  return (
    <main className="h-screen w-screen grid-cols-12 bg-blue-50">
      {children}
    </main>
  );
};
