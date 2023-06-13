
import { validateItem } from './item-order-utils';


/*
	This is ADD button components, it handle updating the list of item by
		It validates the item info, then there are 2 cases:
			1. Item is valid: update the listItem
			2. Item is invalid: notify to user	

	Props:
		1. Item
		2. onListItemChange: function to call when adding new item
 */
export default function AddButton({ data, item, listItem, onListItemChange }) {

	const handleClick = function() {
		// validate the item info
		const validation = validateItem(data, item);
		if (validation === true) {					// if item is valid
			// update the list item
			var newListItem = listItem.slice();
			newListItem.push(item);
			onListItemChange(newListItem);
		} else {									// if item is invalid
			// notify to user
			alert(validation);
		}	// close if
	};

	return (
		<button onClick={handleClick}>
			Add
		</button>
	);
}	// close AddButton