/* Calcualte price */
/*
	Purpose: given attributes of a coffee order, calculate and return the price; 
			- return null if coffee info is invalid (based on the constraints)
	Parameter:
		1. type: the type of coffee: {hot, cold, blended}
		2. size: size of coffee: {s, m, l, xl}
		3. whippedCreamTopping: true/false
		4. chocolatePump: {0, 1, 2, 3, 4, 5, 6}
 */

import priceKey from '../../../data/price-key.json';


/*
	Calculate price based on the info of item, given the price metrics
	Parameters:
		1. data: price metrics
		2. item: current item info
	Return:
		- price of the input item
	*Note: this function does NOT take respondsible for validate item info*
 */
export default function calculatePrice( data, item ) {
	// itemKind: drink or food...
	// itemName: coffee, sandwich...
	if (validateItem(data, item) !== true)
		return NaN;
	const [itemKind, itemName] = getActualItem(data, item);
	var price = data[itemKind][itemName]["basePrice"];
	priceKey[itemName].forEach((key) => {						// key: type or size,...
		Object.keys(data[itemKind][itemName][key]).forEach((value) => {
			if (item[itemKind][itemName][key].toString() == value)			// find the value of the current key
				price += data[itemKind][itemName][key][value];	// add corresponding price for the value base on price metrics
		});
	});
	alert(`Price = ${price}`);
	return price;
}	// close calculatePrice


/* 
	- To validate a drink
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
			validate = `${constraint}`;
		}	// close if
	});
	// notify user about invalid item
	if (validate !== true)
		alert(`Invalid info, due to constraint: ${validate}`);
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
export function getActualItem( data, item ) {
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