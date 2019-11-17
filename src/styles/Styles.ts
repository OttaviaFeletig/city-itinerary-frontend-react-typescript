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
    paddingBottom: "56px",
    display: "flex",
    flexDirection: "column"
  }
});

export const buttonStyle = makeStyles({
  button: {
    background: "#FF9500",
    color: "white",
    position: "fixed",
    zIndex: 2,
    alignSelf: "flex-end",
    right: "10px",
    margin: "10px 0 0 0"
  }
});

export const modalStyle = makeStyles({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "5px 10x",
    padding: "10px"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  button: {
    background: "#FF9500",
    color: "white"
  }
});
