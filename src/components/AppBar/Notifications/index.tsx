import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Tooltip } from '@mui/material';
import React from 'react';
function Notifications() {
  const [invisible, setInvisible] = React.useState(false);
  return (
    <Tooltip title="Notification">
      <Badge color="secondary" sx={{
        cursor: "pointer"
      }} variant="dot" invisible={invisible}>
        <NotificationsNoneIcon />
      </Badge>
    </Tooltip>
  )
}

export default Notifications