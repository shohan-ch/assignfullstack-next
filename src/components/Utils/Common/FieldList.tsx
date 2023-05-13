import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";

interface MyListProps {
  items: string[];
}

export default (props: MyListProps) => {
  const { items } = props;

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index} disablePadding={true}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};
