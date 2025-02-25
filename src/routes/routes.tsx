import { GridArea } from "@components/Layout/GridArea";
import { Home } from "@screens/Home";
import { TagsRegister } from "@screens/Registers/TagsRegister";
import { TargetPublic } from "@screens/Registers/TargetPublic,";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GridArea>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dados/tags" element={<TagsRegister />} />
          <Route path="/dados/publico-alvo" element={<TargetPublic />} />
        </Routes>
      </GridArea>
    </BrowserRouter>
  );
};
