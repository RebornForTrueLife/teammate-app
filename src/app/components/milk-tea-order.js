
/*
	This is milk-tea inputting components
 */

import { TypeOption, SizeOption, CreamOption, ChocolatePumpOption } from './drink-order';


/*
	- Milk-tea has below attributes:
		1. Type
		2. Size
		3. Whipped Cream?
		4. Chocolate sauce
		5. milk
	- Parameters:
		1. item: represent the current milk-tea information. In this case to get actual data = item.drink.milkTea
		2. onItemChange: the function to handle change of milk-tea info, push the data upto the parent component
 */
export default function MilkTeaOrder({ item, onItemChange }) {
	return (
		<>
			<style
				dangerouslySetInnerHTML={{
				  __html:
					'\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f2f2f2;\n      margin: 0;\n      padding: 20px;\n    }\n\n    h1, h2, h3 {\n      color: #333;\n      text-align: center;\n    }\n\n    .container {\n      display: flex;\n      }\n    label {\n      font-weight: bold;\n    }\n\n    select, input[type="number"] {\n      width: 90%;\n      padding: 10px;\n      margin-bottom: 10px;\n      border-radius: 5px;\n      border: 1px solid #ccc;\n    }\n    .box {\n      flex: 1;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding: 20px;\n      margin-right: 20px;\n    }\n\n    .summary {\n      background-color: #f0f0f0;\n      padding: 10px;\n      margin-top: 10px;\n    }\n\n    button {\n      padding: 10px 20px;\n      background-color: #4CAF50;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    button:hover {\n      background-color: #0056b3;\n    }\n    h2 {\n      margin-top: 20px;}\n  '
				}}
			/>
			<div className="box">
				<h2>Milk Tea</h2>
				<br/>

				{/*This is type of drink*/}
				<TypeOption type={item.drink.milkTea.type} onTypeChange={(value) => {
					item.drink.milkTea.type = value;
					onItemChange(item);
				}} />
				<br/>
				
				{/* Size field */}
				<SizeOption size={item.drink.milkTea.size} onSizeChange={(value) => {
					item.drink.milkTea.size = value;
					onItemChange(item);
				}} />
				<br/>
				
				{/* whipped cream topping field */}
				<CreamOption whippedCreamTopping={item.drink.milkTea.whippedCreamTopping} onWhippedCreamToppingChange={(value) => {
					item.drink.milkTea.whippedCreamTopping = value;
					onItemChange(item);
				}} />
				<br/>
				
				{/* Chocolate pump */}
				<ChocolatePumpOption chocolatePump={item.drink.milkTea.chocolatePump} onChocolatePumpChange={(value) => {
					item.drink.milkTea.chocolatePump = value;
					onItemChange(item);
				}} />
				<br/>

				{/* Milk */}
				<MilkOption milk={item.drink.milkTea.milk} onMilkChange={(value) => {
					item.drink.milkTea.milk = value;
					onItemChange(item);
				}} />

				{/* add to ordered-table button */}
				<button>Add</button>
			</div>
		</>
	);
}	// close milkTea


/* components for choosing kind of milk */
function MilkOption({ milk, onMilkChange }) {
	return (
		<select value={milk} onChange={(event) => {onMilkChange(event.target.value)}} >
			<option value="wholeMilk">Whole milk</option>
			<option value="almondMilk">Almond milk</option>
		</select>
	);
}	// close MilkOption