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
          InputProps={{ inputProps: {min }, style: {color: '#faf3e6'} }}  
          InputLabelProps ={{shrink: shrink, style:{color: '#7B763A'}}}
          color="primary"
          variant="outlined"
          {...(error && { error: true, helperText: error })}
        />
      </FormControl>
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  textField: {
    width: 200,
    color: "#faf3e6",
  },
}));