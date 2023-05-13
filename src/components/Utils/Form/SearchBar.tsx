import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import React, { FC } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 500,
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: 500,
    [theme.breakpoints.up("md")]: {
      width: "50ch",
    },
  },
}));

interface SearchBarProps {
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: FC<SearchBarProps> = ({ changeHandler }) => {
  return (
    <>
      <Search>
        <StyledInputBase
          placeholder="Global search"
          inputProps={{ "aria-label": "search" }}
          onChange={changeHandler}
        />
      </Search>
    </>
  );
};
export default SearchBar;
