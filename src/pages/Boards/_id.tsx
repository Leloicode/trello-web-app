import { Box } from "@mui/material"
import BoardBar from "./BoardBar"
import AppBar from "~/components/AppBar"
import BoardContent from "./BoardContent/BoadContent"
import { mockData } from "~/data-mockups/dataBoard"


function Board() {
 

  return (
    <Box sx={{
      margin: 0,
      padding: 0,
      width: '100%',
      height: '100vh',
      backgroundImage: `url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1078x1920/b3db1ba63cd0d59530357dde56a6f979/photo-1679702173887-351a81433cdd.jpg")`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}>  
      <AppBar></AppBar>

      {/* Board Bar */}
      <BoardBar board={mockData.board}></BoardBar>

      {/* Content bar */}
      <BoardContent board={mockData.board}/>
    </Box>
  )
}

export default Board