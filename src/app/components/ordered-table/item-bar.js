/*
	ItemBar is a component to display an Item that has been ordered
	Props:
		item: an object modelized by the structure: item.[kind].[name].[attribute]
			Eg: a coffee: item.drink.coffee...
 */

import styles from '../ordering.module.css';
import printItem from '../printer-item/printer-in-list-item';
// library
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


export default function ItemBar({ item }) {

	return (
		<Box sx={{ flexGrow: 1 }}>
      		<AppBar position="static">
        		<Toolbar>
          			<Typography variant="h10" component="div" sx={{ flexGrow: 1 }}>
            			{printItem(item)}
          			</Typography>
        		</Toolbar>
      		</AppBar>
    	</Box>
	);
}	// close ItemBar