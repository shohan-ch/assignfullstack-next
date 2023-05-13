import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "../Utils/Form/SearchBar";
import React from "react";

export default () => {
  const changeHandler = (e: React.ChangeEvent) => {
    console.log((e.target as HTMLInputElement).value);
  };

  return (
    <>
      <Box sx={{ flexGrow: 5 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Logo
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {/* Search box */}
            <SearchBar changeHandler={changeHandler} />
            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton size="large" color="inherit">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  Notifications
                </Typography>
              </IconButton>
              <IconButton size="large" color="inherit">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Profile
                </Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
