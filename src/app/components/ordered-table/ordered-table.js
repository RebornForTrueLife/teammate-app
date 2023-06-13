
import ItemBar from './item-bar';
import styles from '../ordering.module.css';
// mui-library
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


/* 
	- Ordered-table is where the ordered items will be displayed. 
	Each item is displayed through an ItemBar
	- Props:
		listItem: a list of items that was ordered
 */
export default function OrderedTable({ listItem }) {
	return (
		<div>
			<h2>Order Summary</h2>
			<br/>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
				{getItemBarList(listItem)}
			</List>
		</div>
	);
}	// close OrderedTable


/* get the array of ItemBar with given listItem */
function getItemBarList( listItem ) {
	var listItemBar = [];
	listItem.forEach((item) => {
		listItemBar.push(
			<listItem>
				<ItemBar item={item} />
				<br/>
			</listItem>
		);
	});
	return listItemBar;
}	// close listItem