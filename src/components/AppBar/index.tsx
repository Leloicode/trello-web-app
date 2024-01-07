import { Box } from "@mui/material"
import ModeSelect from "../ModeSelect"
import { Trello_Custom }  from "../../theme"

function AppBar() {
  return (
    <>
      {/* App Bar */}
      <Box sx={{
        width: '100%',
        height: () => Trello_Custom.layout.appBarHeight,
        backgroundColor: 'primary.light',
        display: 'flex',
        alignItems: 'center'
      }}>
        <ModeSelect></ModeSelect>
      </Box>
    </>
  )
}

export default AppBar