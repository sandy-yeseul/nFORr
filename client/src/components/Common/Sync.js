import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";
import Alert from "@material-ui/lab/Alert";
import SyncIcon from "@material-ui/icons/Sync";
import { callDb } from "../../utilities";

export default function Sync({ books }) {
  const [animate, setAnimate] = useState(0);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const SyncHandler = async () => {
    const params = {
      method: "POST",
      url: `/scrape`,
      body: books,
    };
    const result = await callDb(params);
    setContent(result.data)
    setOpen(true)
  };
  return (
    <>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >{content}
        </Alert>
      </Collapse>
      <Tooltip title="Figure out if book has been published">
        <IconButton
          variant="outlined"
          color="secondary"
          onClick={SyncHandler}
          className="SyncIcon"
        >
          <SyncIcon
            className="Sync"
            onClick={() => setAnimate(1)}
            onAnimationEnd={() => setAnimate(0)}
            animate={animate}
          />
        </IconButton>
      </Tooltip>
    </>
  );
}
