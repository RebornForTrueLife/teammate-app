
# Cashier UI for inputting item info


1. Structure of components in UI

```
Ordering 
	CoffeeOrder
		TypeOption
		SizeOption
		...
	MilkTeaOrder
		TypeOption
		SizeOption
		...
	SandwichOrder
		EggOption
		TurkeyOption
	BagelOrder
		ButterOption
		CreamCheeseToppingOption
	OrderedTable
		ItemBar
```

2. Data flow
- The state is stored in Ordering component. It pass props down to its children and its children push back data when user inputting new information.

	1. States/props:
		- itemCoffee: data from 'CoffeeOrder'
		- itemMilkTea: data from 'MilkTeaOrder'
		- itemSandwich: data from 'SandwichOrder'
		- itemBagel: data from 'BagelOrder'
		- listOrderedItem: data from 'OrderedTable'

*Note: for OrderedTable, let think about 
	- make ItemBar separate-file -> in order to update later(ui)
	- what sub-componetns its has, corresponding the style name(can be change detail but keep same name)*

Ordering 
- state: array of item
OrderedTable
- prop: array of item
ItemBar
- prop: item
*Each item has different display: 
(1) can use item class and extends
(2) use printer file - let it take care this things*
