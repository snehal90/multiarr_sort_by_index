This plugin helps you to sort the multidimensional array by index.
There are three parameters:
1. multidimensional array
2. index of value with which the array should get sort(optional, default value is 0)
3. callback(optional)

For eg.

var multiarr_sort = require('multiarr_sort_by_index');
multiarr_sort([[12, 1], [45, 76], [87, 23]], 1);