import { Tooltip } from "@mui/material"
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
function Help() {
  return (
    <Tooltip title="Help">
      <HelpOutlineOutlinedIcon sx={{
        cursor: "pointer"
      }} />
    </Tooltip>
  )
}

export default Help