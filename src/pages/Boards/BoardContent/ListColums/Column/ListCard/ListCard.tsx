import { Box } from "@mui/material"
import { Trello_Custom } from "~/theme"
import CardTask from "./Card/Card"
import { sortByArrayOrder } from "~/ultis/sort";

function ListCard({ listCard , cardOrder }: any) {
  const cardsOrder = sortByArrayOrder(listCard, cardOrder, '_id');

  return (
    <Box sx={{
      maxHeight: () =>  `calc(${Trello_Custom.layout.boardContentHeight()} - ${Trello_Custom.layout.boardContentTitleHeight} - ${Trello_Custom.layout.boardContentFooterHeight} - 45px)`,
      overflowX: 'hidden',
      overflowY: 'auto',
      p: '0 5px',
      m: '0 5px',
      display: 'flex',
      flexDirection: 'column',
      gap: 0.8,
      '&::-webkit-scrollbar': {
        width: 7
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#ccc'
      }
    }}>
      {cardsOrder.map((card:any) => <CardTask card = {card} key={card._id}/>)}
    </Box>
  )
}

export default ListCard