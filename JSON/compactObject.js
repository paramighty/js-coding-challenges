const filteredValue = (array) => {
	let truthyValue = array.filter((item) => !!item);

	return truthyValue.map((item) =>
		Array.isArray(item) ? filteredValue(item) : item
	);
};
filteredValue(arr);
