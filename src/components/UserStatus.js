import React, { Component, useEffect, useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Container } from "@material-ui/core";
import database from "../utils/FirebaseDB";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function UserStatus(props) {
  const classes = useStyles();
  const [waitingLength, setWaitingLength] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const onValueChange = database
      .ref("/test/" + props.match.params.id)
      .orderByKey()
      .endAt(props.match.params.userkey)
      .on("value", (s) => {
        var index = 0;
        s.forEach((child) => {
          const { status, name } = child.val();

          if (status === "WAITING") {
            // console.log(name);
            index++;
          }

          if (child.key === props.match.params.userkey) {
            setUser(child.val());
          }
          // index++;
        });
        // this.setState({ waitingLength: index });
        setWaitingLength(index);
        //console.log('RETURNED', index);
      });

    return () => {
      database
        .ref("/test/" + props.match.params.id)
        .off("value", onValueChange);
    };
  });

  return (
    <>
      {waitingLength}
      {/* <Container>
        <h1>
          <CheckCircleIcon color="primary" fontSize="large" />
        </h1>
        <h3>
          Thanks for registration. Please be patient, you will be served
          shortly.
        </h3>
      </Container> */}

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <CheckCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h6">
            Thanks for registration {user && user.name}. Please be patient, you
            will be served shortly.
          </Typography>
        </div>
        <Box mt={8}>
          <Typography component="h1" variant="h5">
            Your waiting number is {waitingLength}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
