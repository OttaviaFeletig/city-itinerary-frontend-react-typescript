import { makeStyles } from "@material-ui/core/styles";

export const navigationStyle = makeStyles({
  banner: {
    background: "#FF9500"
  },
  icons: {
    color: "white"
  }
});

export const pageStyle = makeStyles({
  bottom: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});
