import { Box, Button, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import React from "react";
import { Trello_Custom } from "~/theme"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListCard from "./ListCard/ListCard";
import BackupTableIcon from '@mui/icons-material/BackupTable';
import AddIcon from '@mui/icons-material/Add';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
function Column({ column }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);  
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
    setActivatorNodeRef
  } = useSortable({
    id: column._id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    // '--translate-x': transform ? transform.x : 0,
    // '--translate-y': transform ? transform.y : 0,
    // '--transition': transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? "grabbing" : "pointer"
  };
  return (
    <Box ref={setNodeRef} style={style} {...attributes}  sx={{
      bgcolor: '#f1f2f4',
      borderRadius: 3,
      minWidth: 270,
      maxWidth: 270,
    }}>
      {/* title */}
      <Box ref={setActivatorNodeRef} {...listeners} sx={{
        padding: '6px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Trello_Custom.layout.boardContentTitleHeight,
      }}>
        <Typography variant="h6" sx={{
          fontWeight: 500,
          fontSize: 16
        }}>{column?.title}</Typography>
        <Tooltip title="Thao tác">
          <Box>
            <IconButton  
              sx={{
                cursor: 'pointer',
                marginRight: -1,
                p: 0.5,
                borderRadius: 1.5,
                overflow: 'unset',
              }}
              id={`basic-menu-options-${column._id}`}
              aria-controls={open ? `basic-menu-options-${column._id}` : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MoreHorizIcon sx={{
                fontSize: 20,
                color: '#333'
              }} />
            </IconButton>
            <Menu
              id={`basic-menu-options-${column._id}`}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': `basic-menu-options-${column._id}`,
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Tooltip>
      </Box>
      {/*  */}


      {/* list-card */}
      <ListCard listCard={column?.cards} cardOrder={column?.cardOrderIds}/>  

      {/* footer */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 1.5,
        height: Trello_Custom.layout.boardContentFooterHeight,
      }}>
        <Button sx={{
          flex: 1,
          justifyContent: "flex-start"
        }} startIcon={<AddIcon />} >
          Thêm thẻ
        </Button>
        <Tooltip title="Tạo từ mẫu...">
          <IconButton 
            sx={{
              cursor: 'pointer',
              p: 0.5,
              borderRadius: 1.5,
            }}
          >
            <BackupTableIcon sx={{
              cursor: 'pointer',
              color: '#333',
              fontSize: 17,
            }}>
            </BackupTableIcon>
          </IconButton>
        </Tooltip>
        
      </Box>
      {/*  */}
    </Box>
  )
}

export default Column