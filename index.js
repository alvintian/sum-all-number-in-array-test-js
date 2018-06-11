function sumItems(array) {

	// if (array.length === 1&& !Array.isArray(array[0])) {
	// 	return Number(array[0]);
	// }
	// // let a = 0;
	// if (Array.isArray(array[0])) {
	// 	return sumItems(array[0]);
	// }
	// // for (i = 0; i < array.length; i++) {
	// // 	a += Number(array[i]);
	// // }
	// // return a;

	// //		return array[0] + sumItems(array.slice(1));
	// return Number(array[0]) + sumItems(array.slice(1));
	let x = 0;
	for (let i = 0; i < array.length; i++) {
		if (Array.isArray(array[i])) {
			x += sumItems(array[i]);
		} else {
			x += array[i];
		}
	}

	return x;

}

module.exports = sumItems;