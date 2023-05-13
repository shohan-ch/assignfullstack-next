import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import FieldList from "../Utils/Common/FieldList";
const buttonStyle = {
  height: "40px",
  background: "#E1E2E6",
  borderRadius: "0",
  color: "#535354",
  fontWeight: "bold",
  textTransform: "capitalize",
};
const DataContainer: FC = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "200px",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={4}>
          <Grid xs={4} item>
            <Box
              sx={{
                backgroundColor: "#C3C4C8",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#535354" }}
              >
                My Fields
              </Typography>
            </Box>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                backgroundColor: "#D9D9D9",
                height: "235px",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                Field List Dropdown View
              </Typography>
            </Stack>
          </Grid>
          <Grid xs={4} item>
            <Box
              sx={{
                backgroundColor: "#BBC6C8",
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#535354" }}
              >
                Field Data
              </Typography>
            </Box>

            <Stack
              direction={"row"}
              spacing={5}
              sx={{
                marginTop: "20px",
                background: "#F7FCFF",
                height: "220px",
                padding: "0 10px",
                paddingTop: "15px",
              }}
            >
              <Box sx={{ borderRight: "1px solid gray" }}>
                <Typography sx={{ fontWeight: "bold", width: "50%" }}>
                  Drainage Classification
                </Typography>

                <FieldList items={["Soil", "Tile", "Yield", "Wetlands"]} />
              </Box>
              <Box>
                <FieldList
                  items={["Weather", "Crop history", "Hail history", "NDVI"]}
                />
              </Box>
            </Stack>
          </Grid>

          <Grid xs={4} item>
            <Box
              sx={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                gap: "43px",
              }}
            >
              <Button
                accessKey=""
                aria-haspopup="true"
                sx={buttonStyle}
                variant="contained"
              >
                Field Monitor
              </Button>
              <Button
                accessKey=""
                aria-haspopup="true"
                variant="contained"
                sx={buttonStyle}
              >
                Field Insight
              </Button>
              <Button
                accessKey=""
                aria-haspopup="true"
                sx={buttonStyle}
                variant="contained"
              >
                Field Notes
              </Button>
              <Button
                accessKey=""
                aria-haspopup="true"
                sx={buttonStyle}
                variant="contained"
              >
                Share Status
              </Button>
            </Box>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                backgroundColor: "#676D83",
                height: "235px",
                marginTop: "20px",
                position: "relative",
              }}
            >
              <Typography
                variant="h6"
                color={"white"}
                sx={{ textAlign: "center", fontWeight: "bold" }}
              >
                DATA, Graph & Table
              </Typography>

              <OpenInFullIcon
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "25px",
                  right: "30px",
                }}
              />
              <Box
                sx={{
                  borderRight: "3px solid white",
                  height: "200px",
                  borderRadius: "2px",
                  position: "absolute",
                  right: "10px",
                }}
              ></Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DataContainer;
