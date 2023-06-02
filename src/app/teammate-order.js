
/*
	This is order page for 4 items: coffee, milk-tea, sandwich, bagel
 */

import CoffeeOrder from './components/coffee-order';


export default function Order() {
	return (
		<>
		  <title>Coffee Order</title>
		  <style
			dangerouslySetInnerHTML={{
			  __html:
				'\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f2f2f2;\n      margin: 0;\n      padding: 20px;\n    }\n\n    h1, h2, h3 {\n      color: #333;\n      text-align: center;\n    }\n\n    .container {\n      display: flex;\n      }\n    label {\n      font-weight: bold;\n    }\n\n    select, input[type="number"] {\n      width: 90%;\n      padding: 10px;\n      margin-bottom: 10px;\n      border-radius: 5px;\n      border: 1px solid #ccc;\n    }\n    .box {\n      flex: 1;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding: 20px;\n      margin-right: 20px;\n    }\n\n    .summary {\n      background-color: #f0f0f0;\n      padding: 10px;\n      margin-top: 10px;\n    }\n\n    button {\n      padding: 10px 20px;\n      background-color: #4CAF50;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    button:hover {\n      background-color: #0056b3;\n    }\n    h2 {\n      margin-top: 20px;}\n  '
			}}
		  />
		  <h1>Coffee Order</h1>
		  <div className="container">
			<div className="box">
			  <h2>Coffee</h2>
			  <label htmlFor="coffeeType">Type:</label>
			  <select id="coffeeType">
				<option value="hot">Hot</option>
				<option value="cold">Cold</option>
				<option value="blended">Blended (+$1)</option>
			  </select>
			  <br />
			  <label htmlFor="coffeeSize">Size:</label>
			  <select id="coffeeSize">
				<option value="S">S</option>
				<option value="M">M (+$0.5)</option>
				<option value="L">L (+$1)</option>
				<option value="XL">XL (+$1.5)</option>
			  </select>
			  <br />
			  <label htmlFor="coffeeWhippedCream">Whipped Cream Topping:</label>
			  <input type="checkbox" id="coffeeWhippedCream" />
			  <br />
			  <br />
			  <label htmlFor="coffeeChocolateSauce">Chocolate Sauce Pumps:</label>
			  <input type="number" id="coffeeChocolateSauce" min={0} max={6} />
			  <br />
			  <button onclick="addCoffee()">Add</button>
			</div>
			<div className="box">
			  <h2>Milk Tea</h2>
			  <label htmlFor="milkTeaType">Type:</label>
			  <select id="milkTeaType">
				<option value="hot">Hot</option>
				<option value="cold">Cold</option>
				<option value="blended">Blended (+$1)</option>
			  </select>
			  <br />
			  <label htmlFor="milkTeaSize">Size:</label>
			  <select id="milkTeaSize">
				<option value="S">S</option>
				<option value="M">M (+$0.5)</option>
				<option value="L">L (+$1)</option>
				<option value="XL">XL (+$1.5)</option>
			  </select>
			  <br />
			  <label htmlFor="milkTeaWhippedCream">Whipped Cream Topping:</label>
			  <input type="checkbox" id="milkTeaWhippedCream" />
			  <br />
			  <br />
			  <label htmlFor="milkTeaChocolateSauce">Chocolate Sauce Pumps:</label>
			  <input type="number" id="milkTeaChocolateSauce" min={0} max={6} />
			  <br />
			  <label htmlFor="milkTeaMilk">Milk Option:</label>
			  <select id="milkTeaMilk">
				<option value="wholeMilk">Whole Milk</option>
				<option value="almondMilk">Almond Milk (+$0.5)</option>
			  </select>
			  <br />
			  <button onclick="addMilkTea()">Add</button>
			</div>
			<div className="box">
			  <h2>Sandwich</h2>
			  <label htmlFor="sandwichEgg">Egg:</label>
			  <input type="checkbox" id="sandwichEgg" />
			  <label htmlFor="sandwichTurkey">Turkey:</label>
			  <input type="checkbox" id="sandwichTurkey" />
			  <br />
			  <br />
			  <button onclick="addBreakfast()">Add</button>
			</div>
			<div className="box">
			  <h2>Bagel</h2>
			  <label htmlFor="bagelButter">Butter:</label>
			  <input type="checkbox" id="bagelButter" />
			  <label htmlFor="bagelCreamCheese">Cream Cheese:</label>
			  <input type="checkbox" id="bagelCreamCheese" />
			  <br />
			  <br />
			  <button onclick="addBreakfast()">Add</button>
			</div>
			<div className="box">
			  <h2>Order Summary</h2>
			  <ul id="orderSummary" />
			</div>
		  </div>
		</>
	);
}	// close Order 

