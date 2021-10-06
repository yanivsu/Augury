import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";

function Machines() {
  const machineSelector = useSelector((state) => state.machinceReducer);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid xs={2}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead style={{ background: "yellow" }}>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {machineSelector.machinesDB.map((row) => {
                if (machineSelector.filterBy === -1) {
                  return (
                    <TableRow key={row.machineName}>
                      <TableCell align="center" component="th" scope="row">
                        {row.machineName}
                      </TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                    </TableRow>
                  );
                } else if (row.status === machineSelector.filterBy) {
                  return (
                    <TableRow key={row.machineName}>
                      <TableCell align="center" component="th" scope="row">
                        {row.machineName}
                      </TableCell>
                      <TableCell align="center">{row.status}</TableCell>
                    </TableRow>
                  );
                }
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}

export default Machines;
