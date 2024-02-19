import { Avatar, AvatarGroup, Box, Card, CardMedia, SvgIcon, Tooltip, Typography } from "@mui/material"
import { ReactComponent as CommentIcon } from '~/assets/comment.svg';
import NotesIcon from '@mui/icons-material/Notes';
const AVATAR_WIDTH_HEIGHT = 20;

function CardTask({ card }: any) {
  const checkActionCard = () => {
    return !!card.memberIds.length || card.cover || !!card.comments.length
  }
  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        overflow: 'unset',
        borderRadius: 1.8,
        cursor: 'pointer', 
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset',
        '&:hover': {
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, #0984e3 0px 0px 0px 1px inset',
        },
      }}>
      {card?.cover && 
      <CardMedia
        sx={{
          height: 140,
          borderRadius: 1.5,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          margin: 0.1,
        }}
        image={card?.cover}
        />
      }
      
      <Box sx={{
        p: 1.5,
        paddingBottom: checkActionCard() ? 0.8 : 2
      }}>
        <Typography variant="inherit" sx={{ fontSize: 14, color: '#333'}} color="text.secondary">
          {card.title}
        </Typography>
      </Box>
      {checkActionCard() && 
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Box sx={{
              p: 1.5,
              paddingTop: 0,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              {card.description && card.description != '' && 
                 <Tooltip title="Thẻ đã có miêu tả">
                 <NotesIcon sx={{
                   fontSize: 16,
                   color: "#57606f",
                   p: 0,
                 }}/>  
               </Tooltip>
              }
             
              { !!card.comments.length && 
                <Tooltip title="Bình luận">
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: 0.1,
                  gap: 0.3
                }}>
                  <SvgIcon component={CommentIcon} fontSize='small' sx={{
                    fontSize: 18,
                    color: "#57606f",
                  }} inheritViewBox />
                  <Typography variant="body2" sx={{
                    fontSize: 13
                  }}>
                    {card.comments.length}
                  </Typography>
                </Box>
              </Tooltip>
              }
              
            </Box>
            <Box sx={{
              p: 1.5,
              paddingTop: 0,
            }}>
              <AvatarGroup sx={{
                '& .MuiAvatar-colorDefault': {
                  width: AVATAR_WIDTH_HEIGHT,
                  height: AVATAR_WIDTH_HEIGHT,
                  fontSize: 10
                }
              }}  max={3}>
                <Avatar  sx=
                  {{ 
                    width: AVATAR_WIDTH_HEIGHT,
                    height: AVATAR_WIDTH_HEIGHT
                  }} alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/6453371c51b4c643bf8deef9/0c6e615330230eb85841adff7261b5fb/170.png" />
                <Avatar sx=
                  {{ 
                    width: AVATAR_WIDTH_HEIGHT,
                    height: AVATAR_WIDTH_HEIGHT
                  }} alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/649004d3bb83800f9686dc10/d79d32ff10ec14beda2481eb947c6312/170.png" />
                <Avatar sx=
                  {{ 
                    width: AVATAR_WIDTH_HEIGHT,
                    height: AVATAR_WIDTH_HEIGHT
                  }} alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/6453371c51b4c643bf8deef9/0c6e615330230eb85841adff7261b5fb/170.png" />
                <Avatar sx=
                  {{ 
                    width: AVATAR_WIDTH_HEIGHT,
                    height: AVATAR_WIDTH_HEIGHT
                  }} alt="Remy Sharp" src="https://trello-members.s3.amazonaws.com/6453371c51b4c643bf8deef9/0c6e615330230eb85841adff7261b5fb/170.png" />
              </AvatarGroup>
            </Box>
          </Box>
      }
    
  
    </Card> 
  )
}

export default CardTask