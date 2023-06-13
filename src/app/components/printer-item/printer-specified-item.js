/*
	This is a library defines how each particular item being displayed
	For printer in list item (used in cashier UI)
 */


// return info of coffee
export function coffee( coffee ) {
	// transfer whipped cream option
	var whippedCreamTopping = "";
	if (coffee.whippedCreamTopping)
		whippedCreamTopping = "[ ADD CREAM ]";
	// transfer chocolate pump option
	var chocolatePump = "";
	if (coffee.chocolatePump !== "0")
		chocolatePump = `\n[ Chocolate sauce: ${coffee.chocolatePump} pumps ]`;
	return `COFFEE: [ ${coffee.type} ] [ ${coffee.size} ]  ${whippedCreamTopping} ${chocolatePump}`;
}	// close coffee


// return info of milk tea
export function milkTea( milkTea ) {
	// transfer whipped cream option
	var whippedCreamTopping = "";
	if (milkTea.whippedCreamTopping)
		whippedCreamTopping = "[ ADD CREAM ]";
	// transfer chocolate pump option
	var chocolatePump = "";
	if (milkTea.chocolatePump !== "0")
		chocolatePump = `\n[ Chocolate sauce: ${milkTea.chocolatePump} pumps ]`;
	return `MILK-TEA: [ ${milkTea.type} ] [ ${milkTea.size} ] [ ${milkTea.milk} ] ${whippedCreamTopping} ${chocolatePump}`;
}	// close milkTea


// return info of sandwich
export function sandwich( sandwich ) {
	// transfer egg option
	var egg = "";
	if (sandwich.egg)
		egg = "[ ADD EGG ]";
	// transfer turkey option
	var turkey = "";
	if (sandwich.turkey)
		turkey = "[ ADD TURKEY ]";
	// if no egg, no turkey
	var info;
	if (!sandwich.egg && !sandwich.turkey)
		info = "SAND-WICH: normal";
	else
		info = `SAND-WICH: ${egg} ${turkey}`;
	return info;
}	// close sandwich


// return info of bagel
export function bagel( bagel ) {
	// transfer butter
	var butter = "";
	if (bagel.butter)
		butter = "[ ADD BUTTER ]";
	// transfer creamCheeseTopping
	var creamCheeseTopping = "";
	if (bagel.creamCheeseTopping)
		creamCheeseTopping = "[ ADD CREAM CHEESE ]";
	// if no butter or cream cheese
	var info;
	if (!bagel.butter && !bagel.creamCheeseTopping)
		info = "BAGEL: normal";
	else
		info = `BAGEL: ${butter} ${creamCheeseTopping}`;
	return info;
}	// close bagel

