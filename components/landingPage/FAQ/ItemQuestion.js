import {
  Box,
  Typography,
  makeStyles,
  Collapse,
  CardContent,
  Grid,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  itemQuestion: {
    paddingTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid",
    paddingBottom: "15px",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  itemQuestionItem: {
    paddingBottom: "20px",
  },

  itemQuestionTitle: {
    ["@media (max-width: 768px)"]: {
      fontSize: "20px !important",
    },
  },

  itemQuestionContent: {
    margin: "3% 0",
  },
}));

function ItemQuestion(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { title, content } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box onClick={handleExpandClick} className={classes.itemQuestion}>
      <Grid className={classes.itemQuestionItem}>
        <Typography variant="h3" className={classes.itemQuestionTitle}>
          {title}
        </Typography>
        <Collapse
          in={expanded}
          timeout="auto"
          className={classes.itemQuestionContent}
          unmountOnExit
        >
          <Typography variant="body2">{content}</Typography>
        </Collapse>
      </Grid>
      <IconButton
        className={clsx(classes.expand, {
          [classes.expandOpen]: expanded,
        })}
        // onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </IconButton>
    </Box>
  );
}

export default ItemQuestion;
