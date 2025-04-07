import { Box, createTheme, PaletteMode, Stack, ThemeProvider } from "@mui/material"
import { Aside } from "./components/Aside/Aside"
import { Feed } from "./components/Feed/Feed"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { Navbar } from "./components/Navbar/Navbar"
import { Addpost } from "./components/Addpost/Addpost"
import { useState } from "react"

function App() {

  const [mode, setMode] = useState<PaletteMode>("light");

  const theme = createTheme({
    palette: {
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }} spacing={2}>
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Aside />
        </Stack>
        <Addpost/>
      </Box>
    </ThemeProvider>
  )
}

export default App
