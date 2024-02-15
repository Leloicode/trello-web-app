import { IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
function SeachInput() {
  return (
    <Paper
      component="form"
      variant="outlined"
      sx={{ p: '1px 2px', display: 'flex', alignItems: 'center', width: 170 , borderColor: '#dfe1e6'}}
    >
      <IconButton disabled type="button" sx={{ p: '3px', }}  aria-label="search">
        <SearchIcon sx={{fill: '#293b5a', fontSize: 18}}/>
      </IconButton>
      <InputBase
        sx={{ 
          ml: 1, 
          flex: 1, 
          fontSize: 13, 
          '&::placeholder': {
            color: 'red'
          }
        }}
        placeholder="Tìm kiếm"
      />
    </Paper>
  )
}

export default SeachInput