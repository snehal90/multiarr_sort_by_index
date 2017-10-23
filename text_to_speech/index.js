module.exports = function(arr, index, callback) {
	index = (index === undefined) ? 0 : index;
	if(arr.length <= index) {
		var err = {};
		err.error_code = 'invalid_parameter';
		err.message = 'Invalid index provided';
		return callback ? callback(err) : err;
	}
	arr.sort(function(a, b) {
		if(a[index] == b[index]) {
			return 0;
		} else {
			return (a[index] > b[index]) ? 1 : -1;
		}
	});

	return callback ? callback(null, arr) : arr;
}