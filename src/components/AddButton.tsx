import React from "react";
import { Add } from "@material-ui/icons";
import { Fab, Modal, Backdrop, Fade } from "@material-ui/core";
import { buttonStyle, modalStyle } from "../styles/Styles";
import AddCity from "./AddCity";
const AddButton: React.FC = () => {
  const { button } = buttonStyle();
  const { modal, paper } = modalStyle();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Fab aria-label="add" className={button}>
        <Add onClick={handleOpen} />
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={paper}>
              <AddCity handleClose={handleClose} />
            </div>
          </Fade>
        </Modal>
      </Fab>
    </React.Fragment>
  );
};
export default AddButton;
