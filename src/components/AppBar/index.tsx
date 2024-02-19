import { Trello_Custom }  from "~/theme"
import AppsIcon from '@mui/icons-material/Apps';
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg';
import SvgIcon from "@mui/material/SvgIcon";
import { Box, Button } from "@mui/material";
import Typography from '@mui/material/Typography';
import Workspaces from "./Menus/Workspaces";
import Recent from "./Menus/Recent";
import Starred from "./Menus/Starred";
import Template from "./Menus/Template";
import SeachInput from "./Searchs";
import Notifications from "./Notifications";
import Help from "./Help";
import AvatarUser from "./Avatar";


function AppBar() {
  
  return (
    <Box px={2} sx={{
      display: 'flex',
      height: () => Trello_Custom.layout.appBarHeight,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff'
    }}>
      {/* App Bar */}
      <Box  sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        color: 'primary.main',
      }}>
        <AppsIcon fontSize='small'/>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.3
        }}>
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox />
          <Typography variant="body1" sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
            color: 'primary.main',
          }}>Trello</Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Template />
        <Button variant="outlined" href="#outlined-buttons" sx={{
          backgroundColor: '#e5e5e5',
          border: 'none',
          '&:hover': {
            backgroundColor: '#cccccc',
            border: 'none',
          },
        }}>Tạo mới</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1
      }}>
        <SeachInput />
        {/* <ModeSelect></ModeSelect> */}
        <Notifications />
        <Help />
        <AvatarUser />
      </Box>
    </Box>
  )
}

export default AppBar