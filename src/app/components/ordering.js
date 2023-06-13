/*
	This is the ordering page for all items
	The item can be added into the order-summary table
 */

"use client"							// in order to use the state
import { useState } from 'react';
import OrderedTable from './ordered-table/ordered-table';
import CoffeeOrder, { initializeCoffee } from './item-order/coffee-order';
import MilkTeaOrder, { initializeMilkTea } from './item-order/milk-tea-order';
import SandwichOrder, { initializeSandwich } from './item-order/sandwich-order';
import BagelOrder, { initializeBagel } from './item-order/bagel-order';
import calculatePrice, { validateItem, getActualItem } from './item-order/item-order-utils';
import data from '/data/item-data.json';


/* Ordering menu */
export default function Ordering() {
	const [itemCoffee, setItemCoffee] = useState(initializeCoffee());
	
	const [itemMilkTea, setItemMilkTea] = useState(initializeMilkTea());

	const [itemSandwich, setItemSandwich] = useState(initializeSandwich());

	const [itemBagel, setItemBagel] = useState(initializeBagel());

	const [listItem, setListItem] = useState([]);		// list of ordered items

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
				<CoffeeOrder data={data} item={itemCoffee} onItemChange={setItemCoffee} listItem={listItem} onListItemChange={setListItem} />
				<MilkTeaOrder data={data} item={itemMilkTea} onItemChange={setItemMilkTea} listItem={listItem} onListItemChange={setListItem} />
				<SandwichOrder data={data} item={itemSandwich} onItemChange={setItemSandwich} listItem={listItem} onListItemChange={setListItem} />
				<BagelOrder data={data} item={itemBagel} onItemChange={setItemBagel} listItem={listItem} onListItemChange={setListItem} />
				<OrderedTable listItem={listItem} />
			</div>
		</>	
	);
}	// close Ordering

