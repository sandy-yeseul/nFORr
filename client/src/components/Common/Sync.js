import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import SyncIcon from "@material-ui/icons/Sync";
import { callDb } from "../../utilities";

export default function Sync({ books }) {
  const [animate, setAnimate] = useState(0);
  const SyncHandler = async () => {
    // const params = {
    //   method: "POST",
    //   url: `/scrape`,
    //   data: books,
    // };
    // const result = await callDb(params);
  };
  return (
    <>
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
