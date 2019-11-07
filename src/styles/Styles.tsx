import { makeStyles } from "@material-ui/core/styles";

export const navigationStyle = makeStyles({
  banner: {
    background: "#FF9500",
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
  icons: {
    color: "white"
  }
});

export const pageStyle = makeStyles({
  page: {
    paddingBottom: "56px"
  },
  bottom: {
    // height: "100vh",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between"
  }
});
