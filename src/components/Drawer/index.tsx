import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

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
