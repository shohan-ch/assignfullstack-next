import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
interface MyListProps {
  items: string[];
}

const FieldList: FC<MyListProps> = ({ items }) => {
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
export default FieldList;
