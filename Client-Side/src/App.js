import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ButtonStatus from "./components/buttonStatusComponent";
import Machines from "./components/machinesComponent";

const useStyles = makeStyles((theme) => ({
  buttons: {
    margin: theme.spacing(5),
  },
}));
function App() {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid className={classes.buttons}>
        <ButtonStatus className={classes.buttons} />
      </Grid>
      <Machines />
    </Grid>
  );
}

export default App;
