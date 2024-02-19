import { Box, Button } from "@mui/material"
import { Trello_Custom } from "~/theme"
import Column from "./Column/Column"
import AddIcon from '@mui/icons-material/Add';
import {DndContext, TouchSensor , closestCenter, MouseSensor, useSensor, useSensors,} from '@dnd-kit/core';
import { SortableContext, horizontalListSortingStrategy,  arrayMove} from '@dnd-kit/sortable';
import { sortByArrayOrder } from "~/ultis/sort";
import { useEffect, useRef, useState } from "react";
function ListColums({ board }: any) {
  const [columnOrder, setColumnOrder] = useState(Array<[]>)
  const refListColumn = useRef<HTMLDivElement>(null);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor),
  );
  useEffect(() => {
    const columnOrder = sortByArrayOrder(board.columns, board.columnOrderIds, '_id');
    setColumnOrder(columnOrder);
  }, [board])
  function handleDragEnd(event:any) {
    const {active, over} = event;
    if (!event || active.id === over.id || !active.id || !over.id) return;
    
    if (active.id !== over.id) {
      const oldIndex = columnOrder.findIndex((c: any) => c._id === active.id);
      const newIndex = columnOrder.findIndex((c: any) => c._id === over.id);
      setColumnOrder(arrayMove(columnOrder, oldIndex, newIndex));
      
    }
  }
  return (
    // chứa các colums
    <Box ref={refListColumn} sx={{  
      width: '100%',
      height: Trello_Custom.layout.boardContentHeight,
      display: 'flex',
      alignItems: 'baseline',
      p: 2,
      gap: 2,
      overflowX: 'auto',
      overflowY: 'hidden',
    }}>
      <DndContext  collisionDetection={closestCenter}  sensors={sensors} onDragEnd={handleDragEnd}>
        <SortableContext strategy={horizontalListSortingStrategy} items={columnOrder.map((c: any) => c._id)}>
          {columnOrder.map((column:any)=>  <Column key={column._id} column={column}/>)} 
        </SortableContext>
      </DndContext>

      {/* <Column />
      <Column /> */}
      <Box >
        <Button sx={{
          background: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '16px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(3.3px)',
          WebkitBackdropFilter: 'blur(3.3px)',
          border: '1px solid rgba(255, 255, 255, 0.02)',
          p: '10px 10px',
          minWidth: 270,
          maxWidth: 270,
          marginTop: -1,
          color: '#fff',
          '&:hover': {
            color: '#000',
          },
          '&:focus': {
            color: '#000',
          }
        }} startIcon={<AddIcon/>}>
          Thêm danh sách khác
        </Button>
      </Box>
    </Box>

  )
}

export default ListColums