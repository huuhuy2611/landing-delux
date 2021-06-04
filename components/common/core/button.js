import { Typography } from "@material-ui/core";
import React from "react";

export const ButtonWhite = (props) => {
  const styles = {
    background: "#F2EFE9",
    color: "#35352F",
    padding: "24px 45px",
    border: "none",
    textTransform: "uppercase",
    cursor: "pointer",
    width: props.width,
  };
  return (
    <button style={styles} {...props}>
      <Typography variant="subtitle1">{props.title}</Typography>
    </button>
  );
};
