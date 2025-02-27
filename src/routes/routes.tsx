import { GridArea } from "@components/Layout/GridArea";
import { Table } from "@components/Table/Table";
import { Home } from "@screens/Home";
import { Page404 } from "@screens/Page404";
import { TagsRegister } from "@screens/Registers/TagsRegister";
import { TargetAudienceRegister } from "@screens/Registers/TargetAudienceRegister";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <GridArea>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro/tags" element={<TagsRegister />} />
          <Route
            path="/cadastro/publico-alvo"
            element={<TargetAudienceRegister />}
          />
          <Route path="/*" element={<Page404 />} />
          <Route path="/tabela" element={<Table />} />
        </Routes>
      </GridArea>
    </BrowserRouter>
  );
};
