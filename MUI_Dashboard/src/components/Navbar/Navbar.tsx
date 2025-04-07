import { AppBar, Avatar, Box, Stack, Toolbar, Typography } from "@mui/material";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";
import { StyledBox } from "./search";

export function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Stack direction={"row"} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1 }} >

          <Typography sx={{ display: { xs: "none", sm: "block" } }}>MUI Dahsboard</Typography>

          {/* //searchBar */}
          <SearchBar />

          {/* icons */}
          <Profile />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}