import { useState } from "react";

import {
  Dialog,
  Box,
  TextField,
  Button,
  Typography,
  styled,
} from "@mui/material";

import { authenticateSignup } from "../../services/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83%;
  width: 28%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 25px 35px;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb6418;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const OtpButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: ##2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialState = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const signUpInitialValue = {
  name: "",
  userName: "",
  email: "",
  password: "",
  phone: "",
};

const LoginDailog = (props) => {
  const [register, setRegister] = useState(accountInitialState.login);
  const [signUp, setSignUp] = useState(signUpInitialValue);

  const registerHandler = () => {
    setRegister(accountInitialState.signup);
  };
  const handleClose = () => {
    props.setToggle(false);
    setRegister(accountInitialState.login);
  };

  const onValueEnterHandler = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const signUpUser = async () => {
    const response = await authenticateSignup(signUp);
  };

  return (
    <Dialog
      open={props.toggle}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{register.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>
              {register.subHeading}
            </Typography>
          </Image>
          {register.view === "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <OtpButton>Request OTP</OtpButton>
              <CreateAccount onClick={registerHandler}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                label="Enter Name"
                name="name"
                onChange={onValueEnterHandler}
              />
              <TextField
                variant="standard"
                label="Enter User Name"
                name="userName"
                onChange={onValueEnterHandler}
              />
              <TextField
                variant="standard"
                label="Enter Password"
                name="password"
                onChange={onValueEnterHandler}
              />
              <TextField
                variant="standard"
                label="Enter Email"
                name="email"
                onChange={onValueEnterHandler}
              />
              <TextField
                variant="standard"
                label="Enter Phone"
                name="phone"
                onChange={onValueEnterHandler}
              />
              <LoginButton onClick={signUpUser}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDailog;
