import React from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";

interface Props {
  primary?: boolean;
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer({
  anchor,
  opened,
  onClose,
  children,
}: Props) {
  return (
    <Drawer anchor={anchor} open={opened} onClose={onClose}>
      {children}
    </Drawer>
  );
}
