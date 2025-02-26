import { GridArea } from "@components/Layout/GridArea";
import { Home } from "@screens/Home";
import { Page404 } from "@screens/Page404";
import { Tags } from "@screens/Registers/Tags";
import { TargetPublic } from "@screens/Registers/TargetPublic,";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GridArea>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro/tags" element={<Tags />} />
          <Route path="/cadastro/publico-alvo" element={<TargetPublic />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </GridArea>
    </BrowserRouter>
  );
};
