

export default function Home() {
	return (
		<>
			<title>Coffee Order</title>
			<style
				dangerouslySetInnerHTML={{
					__html:
						'\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f2f2f2;\n    }\n\n    h1 {\n      color: #333;\n      text-align: center;\n    }\n\n    .container {\n      max-width: 500px;\n      margin: 0 auto;\n      padding: 20px;\n      background-color: #fff;\n      border-radius: 5px;\n      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    }\n\n    label {\n      font-weight: bold;\n    }\n\n    select, input[type="number"] {\n      width: 100%;\n      padding: 10px;\n      margin-bottom: 10px;\n      border-radius: 5px;\n      border: 1px solid #ccc;\n    }\n\n    button {\n      padding: 10px 20px;\n      background-color: #4CAF50;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    h2 {\n      margin-top: 20px;\n      font-size: 20px;\n    }\n\n    .order-summary {\n      margin-top: 10px;\n      padding: 10px;\n      background-color: #f2f2f2;\n      border-radius: 5px;\n    }\n\n    .order-summary p {\n      margin: 5px 0;\n    }\n  '
				}}
			/>
			<div className="container">
				<h1>Coffee Order</h1>
				<label htmlFor="drinkType">Drink Type:</label>
				<select id="drinkType">
					<option value="hot">Hot</option>
					<option value="cold">Cold</option>
					<option value="blended">Blended</option>
				</select>
				<label htmlFor="size">Size:</label>
				<select id="size">
					<option value="S">$2 - Small</option>
					<option value="M">$2.5 - Medium (+$0.5)</option>
					<option value="L">$3 - Large (+$1)</option>
					<option value="XL">$3.5 - Extra Large (+$1.5)</option>
				</select>
				<label htmlFor="whippedCream">Whipped Cream Topping:</label>
				<select id="whippedCream">
					<option value="yes">Yes (+$0.50)</option>
					<option value="no">No</option>
				</select>
				<label htmlFor="availabilityLSize">Availability of L Size:</label>
				<select id="availabilityLSize">
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
				<label htmlFor="milkOption">Milk Option:</label>
				<select id="milkOption">
					<option value="wholeMilk">Whole Milk (+$2.25)</option>
					<option value="almondMilk">Almond Milk (+$2.75)</option>
				</select>
				<label htmlFor="chocolateSaucePumps">Chocolate Sauce Pumps:</label>
				<input type="number" id="chocolateSaucePumps" min={0} max={6} />
				<label htmlFor="quantity">Quantity:</label>
				<input type="number" id="quantity" />
				<label htmlFor="breakfast">Breakfast:</label>
				<select id="breakfast">
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
				<label htmlFor="breakfastType">Breakfast Type:</label>
				<select id="breakfastType">
					<option value="sandwiches">Sandwiches</option>
					<option value="bagels">Bagels</option>
				</select>
				<label htmlFor="sandwichOption">Sandwich Option:</label>
				<select id="sandwichOption">
					<option value="none">None</option>
					<option value="egg">Egg (+$1)</option>
					<option value="turkey">Turkey (+$1)</option>
				</select>
				<label htmlFor="bagelOption">Bagel Option:</label>
				<select id="bagelOption">
					<option value="none">None</option>
					<option value="butter">Butter (+$0.50)</option>
					<option value="creamCheese">Cream Cheese (+$0.50)</option>
				</select>
				<button onclick="calculatePrice()">Calculate Price</button>
				<div className="order-summary">
					<h2>Order Summary</h2>
					<div id="orderSummary" />
				</div>
			</div>
		</>
	);
}	// close 

