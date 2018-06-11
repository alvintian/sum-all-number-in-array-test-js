// let a1=[[[5], [[[4]]], [[3], 2]], 1, []];
let a2 = [
	[1, 2, [
		[3], 4
	]], 5, []
];
let a1 = [1, 2, 3, 4, 5];
// console.log(a1.length);
// console.log(a2.length);
// console.log(a2.slice(1));

function sumItems(array) {

	// 	if (Array.isArray(array[0])) {
	// 		return sumItems(array[0]);
	// 	}
	// 	if (array.length === 1) {
	// 		console.log(array[0],"lastone");
	// 		return Number(array[0]);
	// 	}
	// 	// let a = 0;

	// 	// for (i = 0; i < array.length; i++) {
	// 	// 	if (Array.isArray(array[0])) {
	// 	// 	return sumItems(array[0]);
	// 	// }
	// 	// 	a += Number(array[i]);
	// 	// }
	// 	// return a;
	// console.log(array[0],"still going")
	// 	//		return array[0] + sumItems(array.slice(1));
	// 	return Number(array[0]) + sumItems(array.slice(1));
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

console.log(sumItems(a2));