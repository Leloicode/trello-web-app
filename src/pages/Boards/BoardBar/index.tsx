import { Box } from "@mui/material"
import { Trello_Custom } from "../../../theme"

function BoardBar() {
  return (
    <>
      <Box sx={{
        width: '100%',
        height: () => Trello_Custom.layout.boardBarHeight,
        backgroundColor: 'primary.dark',
        display: 'flex',
        alignItems: 'center'
      }}>
        Board bar
      </Box>
    </>
  )
}

export default BoardBar