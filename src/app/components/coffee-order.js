
/*
	This is UI for coffee order
 */

import { TypeOption, SizeOption, CreamOption, ChocolatePumpOption } from './drink-order';
import calculatePrice, { validateItem, getActualItem } from './item-order';


/*
	Each coffee order information has 4 attributes: 
		1. type
		2. size
		3. whippedCreamTopping
		4. chocolatePump
	This Components allow to input the attributes
	Parameter:
		0. data: metrics data to calcualtePrice, validate info...
		1. Item: in this case, the coffee info = item.drink.coffee
		2. onItemChange, the function to handle when the user inputting coffee info
 */
export default function CoffeeOrder({ data, item, onItemChange }) {
	
	// const price = calculatePrice(type, size, whippedCreamTopping, chocolatePump);

	return (
		<>
			<style
				dangerouslySetInnerHTML={{
				  __html:
					'\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f2f2f2;\n      margin: 0;\n      padding: 20px;\n    }\n\n    h1, h2, h3 {\n      color: #333;\n      text-align: center;\n    }\n\n    .container {\n      display: flex;\n      }\n    label {\n      font-weight: bold;\n    }\n\n    select, input[type="number"] {\n      width: 90%;\n      padding: 10px;\n      margin-bottom: 10px;\n      border-radius: 5px;\n      border: 1px solid #ccc;\n    }\n    .box {\n      flex: 1;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding: 20px;\n      margin-right: 20px;\n    }\n\n    .summary {\n      background-color: #f0f0f0;\n      padding: 10px;\n      margin-top: 10px;\n    }\n\n    button {\n      padding: 10px 20px;\n      background-color: #4CAF50;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    button:hover {\n      background-color: #0056b3;\n    }\n    h2 {\n      margin-top: 20px;}\n  '
				}}
			/>
			<div className="box">
				<h2>Coffee</h2>
				<br/>

				{/*This is type of drink*/}
				<TypeOption id="coffee-type" 
					itemName="coffee"
					type={item.drink.coffee.type} 
					onTypeChange={(value) => {
						const newItem = JSON.parse(JSON.stringify(item));
						newItem.drink.coffee.type = value;
						onItemChange(newItem);
				}} />
				<br/>
				
				{/* Size field */}
				<SizeOption id="coffee-size" 
					itemName="coffee"
					size={item.drink.coffee.size} 
					onSizeChange={(value) => {
						const newItem = JSON.parse(JSON.stringify(item));
						newItem.drink.coffee.size = value;
						onItemChange(newItem);
				}} />
				<br/>
				
				{/* whipped cream topping field */}
				<CreamOption id="coffee-whippedCreamTopping" 
					itemName="coffee"
					whippedCreamTopping={item.drink.coffee.whippedCreamTopping} 
					onWhippedCreamToppingChange={(value) => {
						const newItem = JSON.parse(JSON.stringify(item));
						newItem.drink.coffee.whippedCreamTopping = value;
						onItemChange(newItem);
				}} />
				<br/>
				
				{/* Chocolate pump */}
				<ChocolatePumpOption id="coffee-chocolate" 
					itemName="coffee"
					chocolatePump={item.drink.coffee.chocolatePump} 
					onChocolatePumpChange={(value) => {
						const newItem = JSON.parse(JSON.stringify(item));
						newItem.drink.coffee.chocolatePump = value;
						onItemChange(newItem);
				}} />
				<br/>

				{/* add to ordered-table button */}
				<button onClick={() => calculatePrice(data, item)}>Add</button>
			</div>
		</>
	);
}	// close CoffeeOrder


/*
	initialize coffee input component
 */

