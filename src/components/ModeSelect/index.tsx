import { FormControl, InputLabel, MenuItem, Select, useColorScheme } from "@mui/material"
import { ChangeEvent } from "react";

type Mode = 'light' | 'dark' | 'system';

function ModeSelect() {
  const {mode, setMode} = useColorScheme();
  
  const handleChange = (event: ChangeEvent<{ value: unknown }>): void => {
    const selectMode = event.target.value as Mode;
    setMode(selectMode);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Mode</InputLabel>
      <Select
        labelId="dark-light-select-small-label"
        id="dark-light-select-small"
        value={mode}
        label="mode"
        onChange={(event) => handleChange(event as ChangeEvent<{ value: unknown }>)}
      >
        <MenuItem value='light'>Light</MenuItem>
        <MenuItem value='dark'>Dark</MenuItem>
        <MenuItem value='system'>System</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect