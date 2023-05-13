import MapView from "../Map/MapView";
import CenterBar from "./CenterBar";
import DataContainer from "./DataContainer";
import TopMenus from "./TopMenus";

export default () => {
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
