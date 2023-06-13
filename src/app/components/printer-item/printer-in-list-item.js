/*
	printer: is a function to return the 'readable' data for the given item
	*Note: 'readable' in term of useful to specific use-case: this case is in a list of item*
 */

import * as printer from './printer-specified-item';


/*
	- return the info of given item in form of a string
	- Parameter:
		1. item: data of input item; expressed by this structure:
			item.[kind].[name].[attribute...]
			eg: a coffee: item.drink.coffee...
	- Handle error:
		(1) return description of error if input item is not follow the defined structure, log the error
		(2) return description of error if the item is not described in file: './printer-specified-item', log the error 
	*Note: this function does NOT take care of validating the item info*
 */
export default function printItem( item ) {
	// get the kind of item, eg: drink or food
	if (Object.keys(item).length !== 1)			// item is belong to 1 kind
		return "ERROR: wrong item-structure!";
	const kind = Object.keys(item)[0];
	// get the name of item, eg: coffee, sandwich, milkTea,...
	if (Object.keys(item[kind]).length !== 1)  	// item has only 1 name
		return "ERROR: wrong item-structure!";
	const name = Object.keys(item[kind])[0];
	// check if the printer can print the item
	if (!Object.keys(printer).includes(name))
		return "ERROR: The item-display is not specified in file: 'printer-specified-item'";
	// return the item info base on the item name
	return printer[name](item[kind][name]);
}	// close printItem
