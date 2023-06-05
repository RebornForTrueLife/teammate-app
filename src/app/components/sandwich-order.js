
import calculatePrice, { validateItem, getActualItem } from './item-order';


/*
	This is sandwich inputting UI component, which has below options:
		- egg?
		- turkey?

	Parameter:
		0. data: metrics data to calcualtePrice, validate info...
		1. Item: in this case, the sandwich info = item.food.sandwich
		2. onItemChange, the function to handle when the user inputting sandwich info
 */
export default function SandwichOrder({ data, item, onItemChange }) {
	return (
		<div className="box">
			<h2>Sandwich</h2>
			<br/>			
			<br/>			
			
			<EggOption 
				egg={item.food.sandwich.egg}
				onEggChange={(value) => {
					const newItem = JSON.parse(JSON.stringify(item));
					newItem.food.sandwich.egg = value;
					onItemChange(newItem);
				}}
			/>
			<br/>			
			<br/>			

			<TurkeyOption 
				turkey={item.food.sandwich.turkey}
				onTurkeyChange={(value) => {
					const newItem = JSON.parse(JSON.stringify(item));
					newItem.food.sandwich.turkey = value;
					onItemChange(newItem);
				}}
			/>
			<br/>			
			<br/>

			<button onClick={() => calculatePrice(data, item)}>Add</button>
		</div>
	);
}	// close SandwichOrder


/* component for choosing egg */
function EggOption({ egg, onEggChange }) {
	return (
		<>
			<label htmlFor="sandwich-egg">Egg:</label>
			{' '}
			<input 
				type="checkbox" 
				id="sandwich-egg" 
				checked={egg}
				onChange={(event) => onEggChange(event.target.checked)}
			/>
		</>
	);
}	// close EggOption


/* component for choosing turkey */
function TurkeyOption({ turkey, onTurkeyChange }) {
	return (
		<>
			<label htmlFor="sandwich-turkey">Turkey:</label>
			{' '}
			<input 
				type="checkbox" 
				id="sandwich-turkey" 
				checked={turkey}
				onChange={(event) => onTurkeyChange(event.target.checked)}
			/>
		</>
	);
}	// close TurkeyOption
