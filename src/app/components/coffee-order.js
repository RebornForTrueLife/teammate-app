
/*
	This is UI for coffee order
 */
"use client"			// in order to use the state

import { useState } from 'react';
import data from '../../../data/item-data.json';


export default function CoffeeOrder() {
	const [type, setType] = useState("cold");
	const [size, setSize] = useState("m");
	const [whippedCreamTopping, setWhippedCreamTopping] = useState("yes");
	const [chocolatePump,setChocolatePump] = useState("5");
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
				
				{/* Calculate price */}
				<button onclick="calculatePrice()">{`Calculate Price: ${type}`}</button>
				
				{/* Receipt of order */}

			</div>
		</>
	);
}	// close CoffeeOrder


function TypeOption({ type, onTypeChange }) {
	return (
		<>
			<label htmlFor="type">Drink Type:</label>
			<select id="type" value={type} onChange={(event) => onTypeChange(event.target.value)}>
				<option value="hot">Hot</option>
				<option value="cold">Cold</option>
				<option value="blended">Blended</option>
			</select>
		</>
	);
}	// close TypeOption


function SizeOption({ size, onSizeChange }) {
	return (
		<>
			<label htmlFor="size">Size:</label>
			<select id="size" value={size} onChange={(e) => onSizeChange(e.target.value)}>
				<option value="s">$2 - Small</option>
				<option value="m">$2.5 - Medium (+$0.5)</option>
				<option value="l">$3 - Large (+$1)</option>
				<option value="xl">$3.5 - Extra Large (+$1.5)</option>
			</select>
		</>
	);
}	// close SizeOption


function CreamOption({ whippedCreamTopping, onWhippedCreamToppingChange }) {
	return (
		<>
			<label htmlFor="whippedCream">Whipped Cream Topping:</label>
			<select id="whippedCream" value={whippedCreamTopping} onChange={(e) => onWhippedCreamToppingChange(e.target.value) }>
				<option value="yes">Yes (+$0.50)</option>
				<option value="no">No</option>
			</select>
		</>
	);
}	// close CreamOption


function ChocolatePumpOption({ chocolatePump, onChocolatePumpChange }) {
	return (
		<>
			<label htmlFor="chocolateSaucePumps">Chocolate Sauce Pumps:</label>
			<select id="chocolateSaucePumps" value={chocolatePump} onChange={(e) => onChocolatePumpChange(e.target.value)}>
				<option value="0"> 0 </option>
				<option value="1"> 1 </option>
				<option value="2"> 2 </option>
				<option value="3"> 3 (+$0.50) </option>
				<option value="4"> 4 (+$1.00) </option>
				<option value="5"> 5 (+$1.50) </option>
				<option value="6"> 6 (+$2.00) </option>
			</select>
		</>
	);
}	// close ChocolatePumpOption


function OrderSummary() {
	return (
		<>
			<div className="order-summary">
				<h2>Order Summary</h2>
				<div id="orderSummary" />
			</div>
		</>
	);
}	// close OrderSummary