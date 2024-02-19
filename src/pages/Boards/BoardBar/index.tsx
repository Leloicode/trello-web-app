import { Avatar, AvatarGroup, Box, Button, Chip } from "@mui/material"
import { Trello_Custom } from "../../../theme"
import { capitalizeFirstLetter } from '~/ultis/fomater'
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const AVATAR_WIDTH_HEIGHT = 26;
interface Board {
  _id: string;
  title: string;
  description: string;
  type: string;
  // Các thuộc tính khác của board
}

interface BoardBarProps {
  board: Board;
}
function BoardBar({ board }: BoardBarProps) {
  return (
    <>
      <Box px={2} 
        sx={{
          width: '100%',
          height: () => Trello_Custom.layout.boardBarHeight,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.28)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(4.8px)',
          WebkitBackdropFilter: 'blur(4.8px)',
          justifyContent: 'space-between',
          border: '1px solid rgba(255, 255, 255, 0.25)',
        }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2
        }}>
          <Chip sx={{
            cursor: 'auto'
          }} icon={<DashboardIcon />} label={board?.title} />
          <Chip icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)} />
          <Chip icon={<AddToDriveIcon />} label="Add To Google Driver" />
          <Chip icon={<BoltIcon />} label="Automation" />
          <Chip icon={<FilterListIcon />} label="Filter" />
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2
        }}>
          <Button variant="outlined" 
            href="#outlined-buttons" 
            startIcon = {<PersonAddAltIcon />}
            sx={{
              backgroundColor: '#d8a3c357',
              border: 'none',
              
              '&:hover': {
                backgroundColor: '#cccccc',
                border: 'none',
              },
            }}>Mời</Button>
          <AvatarGroup sx={{
            '& .MuiAvatar-colorDefault': {
              width: AVATAR_WIDTH_HEIGHT,
              height: AVATAR_WIDTH_HEIGHT,
              fontSize: 10
            }
          }}  max={3}>
            <Avatar alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/6453371c51b4c643bf8deef9/0c6e615330230eb85841adff7261b5fb/170.png" sx={{width: AVATAR_WIDTH_HEIGHT, height: AVATAR_WIDTH_HEIGHT}}/>
            <Avatar alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/649004d3bb83800f9686dc10/d79d32ff10ec14beda2481eb947c6312/170.png" sx={{width: AVATAR_WIDTH_HEIGHT, height: AVATAR_WIDTH_HEIGHT}}/>
            <Avatar alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/6453371c51b4c643bf8deef9/0c6e615330230eb85841adff7261b5fb/170.png" sx={{width: AVATAR_WIDTH_HEIGHT, height: AVATAR_WIDTH_HEIGHT}}/>
            <Avatar alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/6453371c51b4c643bf8deef9/0c6e615330230eb85841adff7261b5fb/170.png" sx={{width: AVATAR_WIDTH_HEIGHT, height: AVATAR_WIDTH_HEIGHT}}/>
          </AvatarGroup>
        </Box>
      </Box>
      
    </>
  )
}

export default BoardBar