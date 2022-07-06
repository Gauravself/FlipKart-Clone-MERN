import "./App.css";
import { AppBar, Toolbar, Typography, Box, styled } from "@mui/material";
import Search from "./components/header/Search";
import CustomButtons from "./components/header/CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

//Put HTML element in string
const Plusimage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;

function App() {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{ color: "yellow" }}>
                Plus
              </Box>
            </Subheading>
            <Plusimage src={subURL} alt="sub-logo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
}

export default App;
