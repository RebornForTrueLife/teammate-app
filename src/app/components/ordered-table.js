/* 
	This is where the ordered items list will be displayed
 */

import {calculatePrice, validateItem } from './item-order.js';


export default function OrderedTable({ item }) {
	return (
		<div className="box">
		  <h2>Order Summary</h2>
		  <ul id="orderSummary" />
		</div>
	);
}	// close OrderedTable