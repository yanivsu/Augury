import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

import { colorsEnums, machinesStatusArray } from "../helpers/enums";
import { filterData } from "../actions/defaultAction";

function ButtonStatus() {
  const dispatcher = useDispatch();
  const handleFilterButton = (index) => {
    dispatcher(filterData(index));
  };

  return (
    <Grid container justifyContent="space-evenly">
      {Object.entries(colorsEnums).map((color, index) => {
        return (
          <Button
            style={{ background: color[1], borderRadius: "12px" }}
            onClick={() => {
              handleFilterButton(index);
            }}
            id={index}
          >
            {machinesStatusArray[index]}
          </Button>
        );
      })}
      <Button
        color="primary"
        style={{ borderRadius: "12px" }}
        onClick={() => {
          handleFilterButton(-1);
        }}
      >
        Refresh
      </Button>
    </Grid>
  );
}

export default ButtonStatus;
