/*
	This is the ordering page for all items
	The item can be added into the order-summary table
 */

"use client"							// in order to use the state
import { useState } from 'react';
import OrderedTable from './ordered-table';
import CoffeeOrder from './coffee-order';
import MilkTeaOrder from './milk-tea-order';
import SandwichOrder from './sandwich-order';
import BagelOrder from './bagel-order';
import calculatePrice, { validateItem, getActualItem } from './item-order';
import data from '../../../data/item-data.json';


/* Ordering menu */
export default function Ordering() {
	const [itemCoffee, setItemCoffee] = useState({drink: {coffee: {
		type: "hot",
		size: "s",
		whippedCreamTopping: false,
		chocolatePump: 0
	}}});
	
	const [itemMilkTea, setItemMilkTea] = useState({drink: {milkTea: {
		type: "hot",
		size: "s",
		whippedCreamTopping: false,
		chocolatePump: 0,
		milk: "wholeMilk"
	}}});

	const [itemSandwich, setItemSandwich] = useState({food: {sandwich: {
		egg: false,
		turkey: false
	}}});

	const [itemBagel, setItemBagel] = useState({food: {bagel: {
		butter: false,
		creamCheeseTopping: false
	}}});

	return (
		<>
			<title>Coffee Order</title>
			<style
				dangerouslySetInnerHTML={{
				  __html:
					'\n    body {\n      font-family: Arial, sans-serif;\n      background-color: #f2f2f2;\n      margin: 0;\n      padding: 20px;\n    }\n\n    h1, h2, h3 {\n      color: #333;\n      text-align: center;\n    }\n\n    .container {\n      display: flex;\n      }\n    label {\n      font-weight: bold;\n    }\n\n    select, input[type="number"] {\n      width: 90%;\n      padding: 10px;\n      margin-bottom: 10px;\n      border-radius: 5px;\n      border: 1px solid #ccc;\n    }\n    .box {\n      flex: 1;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 4px;\n      padding: 20px;\n      margin-right: 20px;\n    }\n\n    .summary {\n      background-color: #f0f0f0;\n      padding: 10px;\n      margin-top: 10px;\n    }\n\n    button {\n      padding: 10px 20px;\n      background-color: #4CAF50;\n      color: #fff;\n      border: none;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n\n    button:hover {\n      background-color: #0056b3;\n    }\n    h2 {\n      margin-top: 20px;}\n  '
				}}
			/>
			<h1>Ordering</h1>
			<br/>
			<div className="container">
				<CoffeeOrder data={data} item={itemCoffee} onItemChange={setItemCoffee} />
				<MilkTeaOrder data={data} item={itemMilkTea} onItemChange={setItemMilkTea} />
				<SandwichOrder data={data} item={itemSandwich} onItemChange={setItemSandwich} />
				<BagelOrder data={data} item={itemBagel} onItemChange={setItemBagel} />
				<OrderedTable item={itemCoffee} />
			</div>
		</>	
	);
}	// close Ordering

