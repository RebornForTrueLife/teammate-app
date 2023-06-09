
import calculatePrice, { validateItem, getActualItem } from './item-order-utils';
import AddButton from './add-button';


/*
	The Bagel inputting UI component
	Paramerter:
		0. data: metrics data to calcualtePrice, validate info...
		1. Item: in this case, the bagel info = item.food.bagel
		2. onItemChange, the function to handle when the user inputting bagel info
 */
export default function BagelOrder({ data, item, onItemChange, listItem, onListItemChange }) {
	return (
		<div className="box">
			<h2>Bagel</h2>
			<br/>

			<ButterOption 
				butter={item.food.bagel.butter}
				onButterChange={(value) => {
					const newItem = JSON.parse(JSON.stringify(item));
					newItem.food.bagel.butter = value;
					onItemChange(newItem);
				}}
			/>
			<br/>
			<br/>

			<CreamCheeseToppingOption
				creamCheeseTopping={item.food.bagel.creamCheeseTopping}
				onCreamCheeseToppingChange={(value) => {
					const newItem = JSON.parse(JSON.stringify(item));
					newItem.food.bagel.creamCheeseTopping = value;
					onItemChange(newItem);
				}}
			/>
			<br/>
			<br/>
			
			<AddButton data={data} item={item} listItem={listItem} onListItemChange={onListItemChange} />				
		</div>
	);
}	// close BagelOrder


// butter choosing component
function ButterOption({ butter, onButterChange }) {
	return (
		<>
			<label htmlFor="bagel-butter">Butter:</label>
			{' '}
			<input 
				type="checkbox"
				id="bagel-butter"
				checked={butter}
				onChange={(event) => onButterChange(event.target.checked)}
			/>
		</>
	);
}	// close ButterOption


// creamCheeseTopping choosing component
function CreamCheeseToppingOption({ creamCheeseTopping, onCreamCheeseToppingChange }) {
	return (
		<>
			<label htmlFor="bagel-creamCheeseTopping">Cream cheese topping:</label>
			{' '}
			<input 
				type="checkbox"
				id="bagel-creamCheeseTopping"
				checked={creamCheeseTopping}
				onChange={(event) => onCreamCheeseToppingChange(event.target.checked)}
			/>
		</>
	);
}	// close CreamCheeseToppingOption


// return the initial value of a bagel order
export function initializeBagel() {
	const bagel = {food: {bagel: {
		butter: false,
		creamCheeseTopping: false
	}}};
	return bagel;
}	// close initializeBagel