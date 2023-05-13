import { Box, Stack } from "@mui/material";
import { FC } from "react";
import MenuCommon from "../Utils/Common/MenuCommon";
const TopMenus: FC = () => {
  return (
    <>
      <Box sx={{ width: "100%", backgroundColor: "gray", height: "40px" }}>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          sx={{ width: "90%" }}
        >
          <MenuCommon
            buttonText="Field"
            menuItems={["Add", "Edit", "Import"]}
          />

          <MenuCommon
            buttonText="Water Managment"
            menuItems={["Pump", "TDI", "Tile Maps", "Assment"]}
          />
          <MenuCommon
            buttonText="AnalyZe"
            menuItems={["Yield", "Soils", "Plant Dates"]}
          />
        </Stack>
      </Box>
    </>
  );
};
export default TopMenus;
