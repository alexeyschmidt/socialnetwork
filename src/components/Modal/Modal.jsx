import React from "react";
import s from "./Modal.module.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>Добавить пост</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box className={s.add_post}>

          <IconButton sx={{ marginLeft: 125, marginBottom: 0, marginTop: -10, zIndex: 3, color: "#fff"}} aria-label="" className="s.close_button">
            <CloseIcon />
          </IconButton>

          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить пост
          </Typography>

          <Typography id="modal-modal-description" >
            Текст поста
          </Typography>

        </Box>

      </Modal>
    </>
  );
}
