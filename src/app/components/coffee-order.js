
/*
	This is UI for coffee order
 */
"use client"			// in order to use the state

import { useState } from 'react';
import { TypeOption, SizeOption, CreamOption, ChocolatePumpOption } from './drink-order';
import data from '../../../data/item-data.json';


/*
	Each coffee order information has 4 attributes: 
		1. type
		2. size
		3. whippedCreamTopping
		4. chocolatePump
	This Components allow to input the attributes and calculate the price based on the input.
 */
export default function CoffeeOrder() {
	const [type, setType] = useState("cold");
	const [size, setSize] = useState("m");
	const [whippedCreamTopping, setWhippedCreamTopping] = useState(true);
	const [chocolatePump,setChocolatePump] = useState("5");

	const price = calculatePrice(type, size, whippedCreamTopping, chocolatePump);

	return (
		<>
			<title>Coffee Order</title>
			<style
				dangerouslySetInnerHTML={{
					__html:
						'body { font-family: Arial, sans-serif; background-color: #f2f2f2; } h1 { color: #333; text-align: center; } .container { max-width: 500px; margin: 0 auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); } label { font-weight: bold; } select, input[type="number"] { width: 100%; padding: 10px; margin-bottom: 10px; border-radius: 5px; border: 1px solid #ccc; } button { padding: 10px 20px; background-color: #4CAF50; color: #fff; border: none; border-radius: 5px; cursor: pointer; } h2 { margin-top: 20px; font-size: 20px; } .order-summary { margin-top: 10px; padding: 10px; background-color: #f2f2f2; border-radius: 5px; } .order-summary p { margin: 5px 0; } '
				}}
			/>
			<div className="container">
				<h1>Coffee Order</h1>

				{/*This is type of drink*/}
				<TypeOption type={type} onTypeChange={setType} />

				{/* Size field */}
				<SizeOption size={size} onSizeChange={setSize} />
				
				{/* whipped cream topping field */}
				<CreamOption whippedCreamTopping={whippedCreamTopping} onWhippedCreamToppingChange={setWhippedCreamTopping} />
				
				{/* Chocolate pump */}
				<ChocolatePumpOption chocolatePump={chocolatePump} onChocolatePumpChange={setChocolatePump} />
				
				{/* Receipt of order */}
				<OrderSummary price={price} />
			</div>
		</>
	);
}	// close CoffeeOrder


/*
	The components to show the coffee price
 */
function OrderSummary({ price }) {
	return (
		<>
			<div className="order-summary">
				<h2>Order Summary</h2>
				{`Total price ${price}`}
			</div>
		</>
	);
}	// close OrderSummary


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
function calculatePrice( type, size, whippedCreamTopping, chocolatePump ) {
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


