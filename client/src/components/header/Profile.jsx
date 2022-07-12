import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { Box, styled, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const LogoutBtn = styled(Typography)`
  font-size: 14px;
  margin-left: 10px;
`;

const Profile = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const Logout = () => {
    props.setAccount("");
  };
  return (
    <>
      <Box>
        <Typography onClick={handleClick} style={{ marginTop: 2 }}>
          {props.account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem onClick={(handleClose(), Logout())}>
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <LogoutBtn>Logout</LogoutBtn>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
