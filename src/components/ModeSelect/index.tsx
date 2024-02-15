import { Tooltip, useColorScheme } from "@mui/material"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
type Mode = 'light' | 'dark' | 'system';

function ModeSelect() {
  const {mode, setMode} = useColorScheme();
  
  const handleChange = (value: Mode): void => {
    setMode(value);
  }

  return (
    <Tooltip title="Mode">
      {/* light - icon sun*/}
      {mode == 'light' ? <DarkModeOutlinedIcon  sx={{
        cursor: 'pointer'
      }} onClick={() => {handleChange('dark')}}/> : <LightModeOutlinedIcon sx={{
        cursor: 'pointer'
      }} onClick={() => {handleChange('light')}}/>}
    </Tooltip>
  )
}

export default ModeSelect