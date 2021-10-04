import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  header: {
    padding: theme.spacing(2),
    fontWeight: "Bold",
    textAlign: "center",
    color: "whitesmoke",
    background: "#3f51b5",
  },
  loading: {
    marginLeft: "50vw",
    marginTop: "50vh",
  },
}));
function App() {
  const classes = useStyles();

 // const compressDataSelector = useSelector((state) => state.compressReducer);
 const dispatcher = useDispatch();

 
  useEffect(() => {
    // Fetch Data
   // dispatcher(loadInitData());
  }, []);

  return( <div><Typography>Welcome To Yaniv Suriyano Start Project With React, Redux, NodeJs</Typography></div>)
}

export default App;
