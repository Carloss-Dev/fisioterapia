import { GridArea } from "@components/Layout/GridArea";
import { Home } from "@screens/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GridArea>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </GridArea>
    </BrowserRouter>
  );
};
