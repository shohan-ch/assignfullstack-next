import { Box } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import Map, { Layer, Source } from "react-map-gl";
import { MAPBOX_ACCESS_TOKEN } from "../../../config";
import { FC } from "react";
const MapView: FC = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", height: "400px" }}>
        <Map
          initialViewState={{
            latitude: 37.8,
            longitude: -122.4,
            zoom: 14,
          }}
          style={{ width: "100%", height: "400px" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        >
          {data && (
            <Source id="my-data" type="geojson" data={data}>
              <Layer
                id="my-line-layer"
                type="line"
                paint={{
                  "line-color": "red",
                  "line-width": 2,
                }}
              />
            </Source>
          )}
        </Map>
      </Box>
    </>
  );
};
export default MapView;
