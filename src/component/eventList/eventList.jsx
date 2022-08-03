import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Box } from '@mui/material';


function EventList(props) {
  const { index, value } = props;

  return (
    <ListItem key={index} component="div" disablePadding>
      <ListItemButton>
        <Box>
          {value}
        </Box>
      </ListItemButton>
    </ListItem>
  );
}
export default EventList