import { GridArea } from "@components/Layout/GridArea";
import { Home } from "@screens/Home";
import { Page404 } from "@screens/Page404";
import { TagsTable } from "@screens/Table/TagsTable";
import { TargetAudienceTable } from "@screens/Table/TargetAudienceTable";
import { HashRouter, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <HashRouter>
      <GridArea>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dados/tags" element={<TagsTable />} />
          <Route path="/dados/publico-alvo" element={<TargetAudienceTable />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </GridArea>
    </HashRouter>
  );
};
