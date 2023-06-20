/* Calcualte price 
	This utilities of item-order, provide below services:
		1. validateItem: validating if an item is valid or not
		2. calculatePrice: calculate price of item based on a map(value, price) in database
 */

import priceKey from '/data/price-key.json';


/*
	Calculate price based on the info of item, given the price metrics
	Parameters:
		1. data: price metrics
		2. item: an object, modelized by this struture: item.[kind].[name].[attribute]
			Eg: an coffee item is: item.drink.coffee
	Return:
		- price of the input item
	*Note: this function does NOT take respondsible for validate item info*
 */
export default function calculatePrice( data, item ) {
	// itemKind: drink or food...
	// itemName: coffee, sandwich...
	const [itemKind, itemName] = getActualItem(data, item);
	var price = data[itemKind][itemName]["basePrice"];
	priceKey[itemName].forEach((key) => {						// key: type or size,...
		Object.keys(data[itemKind][itemName][key]).forEach((value) => {
			if (item[itemKind][itemName][key].toString() == value)			// find the value of the current key
				price += data[itemKind][itemName][key][value];	// add corresponding price for the value base on price metrics
		});
	});
	return price;
}	// close calculatePrice


/* 
	- To validate a item based on 2 conditions:
		1. The item is in the database
		2. If the item-name has constraint in database, it must satisfy all constraint
	- Return true if the drink is valid, otherwise return message reporting wrong constraint
 */
export function validateItem( data, item ) {
	const [itemKind, itemName] = getActualItem(data, item);
	if (itemKind == null)								// item is not match in item database
		return `${item} is not found`;
	const metaItem = data[itemKind][itemName];			// metrics to validate the item
	const actualItem = item[itemKind][itemName];
	// validate drink information
	if (!Object.hasOwn(metaItem, "constraint"))			// if item has no constraints -> no need to check
		return true;
	const constraints = metaItem.constraint;
	var validate = true;
	constraints.forEach(constraint => {
		// for each constraint: imply corresponding expression to validate the drink order
		var operand11 = actualItem[constraint[1]] == [constraint[2]];
		var operand1 = constraint[0] === 1?  operand11: !operand11;
		var operand21 = actualItem[constraint[4]] == [constraint[5]];
		var operand2 = constraint[3] === 1?  operand21: !operand21;
		var expression = operand1 && operand2;
		if (expression === true) {		// the drink info is invalid
			validate = `${constraint[6]}`;
		}	// close if
	});
	return validate;
}	// close validateItem


/*
	Parameter:
		1. data: information of the all items
		2. item: information of particular item: such as: item.drink.coffee
	Return:
		- item-kind (drink or food?) and item-name (coffee, sandwich...)
		eg: if item is a coffee then, the result is: [drink, coffee]

 */
function getActualItem( data, item ) {
	var kind = null;
	var name = null;
	Object.keys(data).forEach((itemKind) => {
		if (item[itemKind]) {							// found kind of item
			Object.keys(data[itemKind]).forEach((itemName) => {
				if (item[itemKind][itemName]) {			// found name of item
					kind = itemKind;
					name = itemName;
				}	// close if
			});
		}	// close if
	});
	// if the item has no match with data -> item is invalid
	// console.log(`${kind} - ${name}`);
	return [kind, name];
}	// close getActualItem


/*
	A Factory to create an Item given the item-name
	Purpose:
		- to make sure every created Item follow the same creating procedures (Builder)
		and be able to add specific properties of specific item
 */
const ItemFactory = function() {
	this.createItem = function( itemName ) {
		// searching kind of item in database
		var item;		
		return item;
	}	// close createItem
}	// close ItemFactory
