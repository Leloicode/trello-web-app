import { Box } from "@mui/material"
import BoardBar from "./BoardBar"
import { Trello_Custom } from "~/theme"
import AppBar from "~/components/AppBar"

function Board() {
  return (
    <Box sx={{
      width: '100%',  
      height: '100vh'
    }}>  
      <AppBar></AppBar>

      {/* Board Bar */}
      <BoardBar></BoardBar>

      {/* Content bar */}
      <Box sx={{  
        width: '100%',
        height: () => `calc(100vh - ${Trello_Custom.layout.appBarHeight} - ${Trello_Custom.layout.boardBarHeight})`,
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center'
      }}>
        Content Bar
      </Box>
    </Box>
  )
}

export default Board