import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App/App";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#F28613", // This is an orange looking color
    },
    secondary: {
      main: "#ffcc80", //Another orange-ish color
    },
    default: {
      main: "#faf3e6",
    }
  },
  overrides:{
    MuiButton:{
      outlined:{
        color: "#faf3e6",
        borderColor: "#faf3e6",
      },
    },
    MuiTextField:{
      outlined:{
        color: "#faf3e6",
      }
    },
    MuiInputBase:{
      outlined:{
        color: "#faf3e6",
      }
    }
  }
});
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
