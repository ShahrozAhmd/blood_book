import React from "react";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import { Box } from "@material-ui/core";

const ProfileEditButton = (props) => {
  return (
    <div>
      <Box display="flex" justifyContent="flex-end">
        <IconButton color="secondary" aria-label="add an alarm">
          <CreateIcon onClick={() => props.clicked(props.name)} />
        </IconButton>
      </Box>
    </div>
  );
};

export default ProfileEditButton;
