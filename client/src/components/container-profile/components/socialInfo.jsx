import React from "react";
import Link from "@material-ui/core/Link";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import Fab from "@material-ui/core/Fab";
import { useStyles } from "../styles";
import TextField from "@material-ui/core/TextField";
import CheckIcon from "@material-ui/icons/Check";

export default function SocialInfo() {
  // console.log("mi data", data);
  // ``;
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const [state, setState] = useState({
    editandoName: false,
    editandoLastName: false,
    editandoEmail: false,
  });

  const rows = ["Cinthia Daira", "Pardos", "cinthia@email.com"];
  const startEditN = () => {
    setState({
      editandoName: true,
    });
  };
  const stopEditN = () => {
    setState({
      editandoName: false,
    });
  };
  const startEditL = () => {
    setState({
      editandoLastName: true,
    });
  };
  const stopEditL = () => {
    setState({
      editandoLastName: false,
    });
  };
  const startEditE = () => {
    setState({
      editandoEmail: true,
    });
  };
  const stopEditE = () => {
    setState({
      editandoEmail: false,
    });
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <React.Fragment>
      <Table size="small">
        <TableHead>
          <TableCell className={classes.rowStyle}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              Redes Sociales
            </Typography>
          </TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
          <TableCell className={classes.rowStyle}></TableCell>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className={classes.font}>Github:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoName ? (
                <TextField
                  name="name"
                  onChange={handleChange}
                  placeholder={rows[0]}
                />
              ) : (
                // data.name
                "www.github.com"
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoName ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEditN()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEditN()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>LinkedIn:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoLastName ? (
                <TextField
                  onChange={(e) => handleChange(e)}
                  name="lastname"
                  placeholder={rows[1]}
                />
              ) : (
                // data.lastname
                "linkedin account"
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoLastName ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEditL()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEditL()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.font}>Pagina personal:</TableCell>
            <TableCell className={classes.font} selectable={false}>
              {state.editandoEmail ? (
                <TextField
                  name="email"
                  onChange={handleChange}
                  placeholder={rows[2]}
                />
              ) : (
                // data.email
                ""
              )}
            </TableCell>
            <TableCell className={classes.font}>
              {state.editandoEmail ? (
                <Fab size="small" color="primary" aria-label="edit">
                  <CheckIcon onClick={() => stopEditE()} />
                </Fab>
              ) : (
                <Fab size="small" color="primary" aria-label="edit">
                  <EditIcon onClick={() => startEditE()} />
                </Fab>
              )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </React.Fragment>
  );
}