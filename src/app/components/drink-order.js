
/*
	This is library for common components used in drink order, such as coffee or milk-tea
	The components are:
		1. TypeOption: allow to select type of drink
		2. SizeOption: to select size of drink
		3. CreamOption: to choose if adding whippedCreamTopping or not
		4. ChocolatePumpOption: to choose the number of chocolate sauce pump into the drink
 */

/*
	Type input component
	Parameters:
		1. type: current type value
		2. onTypeChange: function to handle when the type value is changed

	* Similar to 3 attributes *
 */
export function TypeOption({ itemName, type, onTypeChange }) {
	return (
		<>
			<label htmlFor={`${itemName}-type`}>Drink Type:</label>
			<br/>
			<select id={`${itemName}-type`} value={type} onChange={(event) => onTypeChange(event.target.value)}>
				<option value="hot">Hot</option>
				<option value="cold">Cold</option>
				<option value="blended">Blended</option>
			</select>
		</>
	);
}	// close TypeOption


/*
	Size input component
 */
export function SizeOption({ itemName, size, onSizeChange }) {
	return (
		<>
			<label htmlFor={`${itemName}-size`}>Size:</label>
			<br/>
			<select id={`${itemName}-size`} value={size} onChange={(e) => onSizeChange(e.target.value)}>
				<option value="s">$2 - Small</option>
				<option value="m">$2.5 - Medium (+$0.5)</option>
				<option value="l">$3 - Large (+$1)</option>
				<option value="xl">$3.5 - Extra Large (+$1.5)</option>
			</select>
		</>
	);
}	// close SizeOption


/*
	whippedCreamTopping input component
 */
export function CreamOption({ itemName, whippedCreamTopping, onWhippedCreamToppingChange }) {
	return (
		<>
			<label htmlFor={`${itemName}-whippedCreamTopping`}>Whipped Cream Topping:</label>
			{' '}
			<input 
				id={`${itemName}-whippedCreamTopping`}
				type="checkbox" 
				checked={whippedCreamTopping} 
				onChange={(e) => onWhippedCreamToppingChange(e.target.checked)} />
			<br/>
		</>
	);
}	// close CreamOption


/*
	chocolatePump input component
 */
export function ChocolatePumpOption({ itemName, chocolatePump, onChocolatePumpChange }) {
	return (
		<>
			<label htmlFor={`${itemName}-chocolatePump`}>Chocolate Sauce Pumps:</label>
			<br/>
			<input 
				id={`${itemName}-chocolatePump`}
				type="number"
				min="0"
				max="6"
				value={chocolatePump} 
				onChange={(e) => onChocolatePumpChange(e.target.value)}>
			</input>
		</>
	);
}	// close ChocolatePumpOption
