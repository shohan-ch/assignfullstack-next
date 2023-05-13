import { FC } from "react";
import MapView from "../Map/MapView";
import CenterBar from "./CenterBar";
import DataContainer from "./DataContainer";
import TopMenus from "./TopMenus";
const HomeView: FC = () => {
  return (
    <>
      <TopMenus />
      {/* Map */}
      <MapView />
      <CenterBar />
      <DataContainer />
    </>
  );
};

export default HomeView;
