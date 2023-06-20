
**Assignment note: Applying Factory pattern design for modeling item-data**


# Modeling items data


1. Item (created when inputting item info)

	1. Modeling
	 - An item is modeled as an object having below structure
	 	```
	 	{[item-kind]: {
	 		[item:name]: {
	 			item-attri#1: value
	 			item-attri#2: value
	 			...
	 		}}}
	 	```

	 - values example:
	 	1. item-kind: drink or food,...
	 	2. item-name: 
	 		> Item name is unique and must be declared in name-space file

	 		- example: coffee, milkTea, sandwich, bagel,...
	 	3. item-attri
	 		- each specific item has an own list of attributes
	 		- example:
	 			- coffee may have 4 attributes: type, size, cream, chocolate
	 			- sandwich may have 2 attributes: addEgg, addTurkey 
	 		
	 		*Note: these attributes is used to calculate additional price*

	2. How to do?
		> Using a Factory to create Item

		1. why? 
		 - In order to guarentee that each created item follow same correct step of creating 

		 	> Example: coffee and sandwich must also declare their item-kind and item-name

		 - In order to let each specific Item has its own list of attributes

		 	> Example: coffee may have 4 attributes while sandwich has 2 other different attributes

		 2. Demo

		 	*Not yet -> on TO-DO*