import { useState, useContext } from "react";
import { Box, styled, Button, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDailog from "../login/LoginDailog";
import { DataContext } from "../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Loginbutton = styled(Button)`
  color: #2874f0;
  background: white;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CartContainer = styled(Box)`
  display: flex;
`;

const CustomButtons = () => {
  const [toggle, setToggle] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const handleToggle = () => {
    setToggle(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Loginbutton variant="contained" onClick={handleToggle}>
          Login
        </Loginbutton>
      )}
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <CartContainer>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartContainer>
      <LoginDailog toggle={toggle} setToggle={setToggle} />
    </Wrapper>
  );
};

export default CustomButtons;
