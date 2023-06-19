
# L1 - pricing

Objectives: Calculate price guven the information of an item
===

## Break down the problem

> Problem can be divided into 2 subproblems

1. Modelize the item data
- Each item is modelized as an object follow below structure
	`[item].[item-kind].[item-name].[attribute-key].[attribute-value] = [corresponding-price]`

	- Example: a coffee order can be modelized as 
		`item.drink.coffee.type.hot = 0`
		`item.drink.coffee.type.cold = 0.5`

		Which means a coffee with type hot takes no additional price, mean while a coffee with type cold take $0.5 additional price

- If an item has some constraints, a constraint attribute will be added in the item objects

	- A coffee constraint:'type HOT can not go with size L' can be modelized as an array 
		```
			[1, "type", "hot", 1, "size", "l", "A hot drink only has size S or M!"]
		```

		- This is then implied as an expression = type.hot && size.l. The coffee is valid if the expression is false, vice versa.

		- The last element of the array is the meanning of the constraint, which is used to notify the user when the info is invalid

2. Calculate price

- Based on the modelized item data, calculating the price of an item given its information

- NOTE: an item have more information not only for pricing, so the list of attributes needs to calcualte price is listed and stored in other file: data/price-key.json
