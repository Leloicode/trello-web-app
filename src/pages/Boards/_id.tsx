import { Box } from "@mui/material"
import BoardBar from "./BoardBar"
import { Trello_Custom } from "~/theme"
import AppBar from "~/components/AppBar"

function Board() {
  return (
    <Box sx={{
      width: '100%',  
      height: '100vh',
      backgroundImage: `url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1078x1920/b3db1ba63cd0d59530357dde56a6f979/photo-1679702173887-351a81433cdd.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}>  
      <AppBar></AppBar>

      {/* Board Bar */}
      <BoardBar></BoardBar>

      {/* Content bar */}
      <Box sx={{  
        width: '100%',
        height: () => `calc(100vh - ${Trello_Custom.layout.appBarHeight} - ${Trello_Custom.layout.boardBarHeight})`,
        display: 'flex',
        alignItems: 'center'
      }}>
        Content Bar
      </Box>
    </Box>
  )
}

export default Board