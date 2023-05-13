import { Box, Button, Typography } from "@mui/material";
export default () => {
  const style = {
    width: "100%",
    backgroundColor: "gray",
    height: "65px",
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingLeft: "50px",
    paddingLeft: "0px",
  };
  return (
    <>
      <Box sx={style}>
        <div style={{ paddingLeft: "20px" }}>
          <Typography variant="h6" color="white">
            Selected Field Information
          </Typography>
        </div>
        <div style={{ paddingRight: "10px" }}>
          <Button
            variant="contained"
            sx={{
              color: "Black",
              backgroundColor: "White",
              borderRadius: "0",
              fontWeight: "bold",
            }}
          >
            Request Service
          </Button>
        </div>
      </Box>
    </>
  );
};
