import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, FormControl } from "@material-ui/core";

export default function FormFiled(props) {
  const classes = useStyles();
  const {
    error = null,
    shrink,
    min,
    ...others
  } = props;
  return (
    <>
      <FormControl>
        <TextField
          {...others}
          className={classes.textField}
          InputProps={{ inputProps: {min } }}  
          InputLabelProps ={{shrink: shrink}}
          variant="outlined"
          {...(error && { error: true, helperText: error })}
        />
      </FormControl>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  textField: {
    margin: theme.spacing(1),
    width: 200,
    color: "#faf3e6",
  },
}));