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

import data from '../../../data/item-data.json';


export function calculatePriceTest( type, size, whippedCreamTopping, chocolatePump ) {
	const COFFEE = data.drink.coffee;		// general information of coffee order(price table)
	const coffee = {};						// information of current coffee order
	// set the current coffee order info
	coffee["type"] = {[type]: true};
	coffee["size"] = {[size]: true};
	coffee["whippedCreamTopping"] = {[whippedCreamTopping]: true};
	coffee["chocolatePump"] = {[chocolatePump]: true};
	// validate coffee information
	const constraints = COFFEE.constraint;
	var validate = true;
	constraints.forEach(constraint => {
		// for each constraint: imply corresponding expression to validate the coffee order
		var operand1 = constraint[0] === 1? coffee[constraint[1]][constraint[2]] : !coffee[constraint[1]][constraint[2]];
		var operand2 = constraint[3] === 1? coffee[constraint[4]][constraint[5]] : !coffee[constraint[4]][constraint[5]];
		var expression = operand1 && operand2;
		if (expression === true)		// the coffee info is invalid
			validate = `${expression}: ${type} ${size} ${whippedCreamTopping} ${chocolatePump}`;
	});
	if (validate !== true)				// the coffee info is invalid
		return null;					
										// if the coffee info is valid
	// calculate additional price 					
	let additionalPrice = 0;
	Object.keys(coffee).forEach((attri) => {
		Object.keys(COFFEE[attri]).forEach((attriValue) => {
			if (coffee[attri][attriValue])
				additionalPrice += COFFEE[attri][attriValue];
		});
	});

	// add the base price
	const price = COFFEE["basePrice"] + additionalPrice;
	return price;
}	// close calculatePrice


export default function calculatePrice( item ) {
	if (item.drink.coffee) {
		const COFFEE = data.drink.coffee;
		const coffee = item.drink.coffee;
	}	// close if
}	// close calculatePrice


/* 
	- To validate a drink
	- Return true if the drink is valid, otherwise return message reporting wrong constraint
 */
export function validateItem( item ) {
	// get the actual item
	var metaItem;					// general Item for validate
	var actualItem;
	if (item.drink.coffee) {
		metaItem = data.drink.coffee;
		actualItem = item.drink.coffee;
	}	// close if
	if (item.drink.milkTea) {
		metaItem = data.drink.milkTea;
		actualItem = item.drink.milkTea;
	}	// close if
	if (!metaItem)					// if it's not a drink, then passed (only drink has constraints)
		return true;
	// validate coffee information
	const constraints = metaItem.constraint;
	var validate = true;
	constraints.forEach(constraint => {
		// for each constraint: imply corresponding expression to validate the coffee order
		var operand1 = constraint[0] === 1? actualItem[constraint[1]][constraint[2]] : !actualItem[constraint[1]][constraint[2]];
		var operand2 = constraint[3] === 1? actualItem[constraint[4]][constraint[5]] : !actualItem[constraint[4]][constraint[5]];
		var expression = operand1 && operand2;
		if (expression === true)		// the coffee info is invalid
			validate = `${constraint}: ${type} ${size} ${whippedCreamTopping} ${chocolatePump}`;
	});
	return validate;
}	// close validateItem