import React from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Toolbar from "@mui/material/Toolbar"
import Box from "@mui/material/Box"
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"

const Admin = () => {
  const mdTheme = createTheme()
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <>
          <Sidebar />
        </>
        <>
          <Box
            component='main'
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Outlet />
          </Box>
        </>
      </Box>
    </ThemeProvider>
  )
}

export default Admin
