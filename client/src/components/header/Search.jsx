import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase, styled } from "@mui/material";

const SearchContainer = styled(Box)`
  background: white;
  width: 38%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size: unset;
  font-family: Arial, sans-serif;
  letter-spacing: -0.2px;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for Products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
