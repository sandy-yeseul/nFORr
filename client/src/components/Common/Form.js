import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Error, FormField, Button } from "../Common";

export default function Form({ fields, buttonText, handler }) {
  const classes = useStyles();
  const [fieldValues, setFieldValues] = useState(fields);
  const [errors, setErrors] = useState({});
  const [image, setImage] = useState();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const temp = { ...fieldValues };
    temp[name] = value;
    setFieldValues(temp);
  };
  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      submitHandler(e);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(fieldValues).map((field) => {
      formData.append(`${field.toString()}`, fieldValues[field]);
      return formData;
    });
    if (image) {
      formData.append("image", image, image.name);
    }
    handler(formData);
  };

  return (
    <>
      <form className={classes.root}>
        {Object.keys(fields).map((field) => {
          if (field === "title" || field === "author") {
            return (
              <FormField
                name={field}
                label={field}
                value={fieldValues[field]}
                onChange={handleInputChange}
                onKeyDown={(e) => enterHandler(e)}
                error={errors[field]}
                key={field}
                required
              />
            );
          }
          if (field === "publishDate") {
            return (
              <FormField
                name={field}
                label={"publish date"}
                value={fieldValues[field]}
                onChange={handleInputChange}
                type="date"
                shrink
                key={field}
              />
            );
          }
          if (field === "price") {
            return (
              <FormField
                name={field}
                label={field}
                value={fieldValues[field]}
                onChange={handleInputChange}
                onKeyDown={(e) => enterHandler(e)}
                error={errors[field]}
                type="number"
                min={0}
                key={field}
              />
            );
          }
          return (
            <FormField
              name={field}
              label={field}
              value={fieldValues[field]}
              onChange={handleInputChange}
              onKeyDown={(e) => enterHandler(e)}
              error={errors[field]}
              key={field}
            />
          );
        })}
        <Button
          color="primary"
          component="label"
          className={classes.fileButton}
        >
          파일 선택하기
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            id="photo"
            file="photo"
            accept=".gif, .jpg, .jpeg, .png"
            hidden
          />
        </Button>
        <Button
          color="secondary"
          className={classes.submitButton}
          onClick={(e) => submitHandler(e)}
        >
          {buttonText}
        </Button>
      </form>
      {/* {errors && <Error message={errors} />} */}
    </>
  );
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    overflow: "hidden",
    "& > div": {
      margin: '25px'
    },
  },
  fileButton: {
    margin: '25px'
  },
  submitButton: {
    margin: theme.spacing(1),
    float: "right",
  },
}));
