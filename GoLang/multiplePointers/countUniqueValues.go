package multiplePointers

func CountUniqueValues(arr []int) int {
	// write a function that takes a sorted array
	// returns number of unique values in the array

	// if array is empty or has 1 element, can return its length
	if len(arr) < 2 {
		return len(arr)
	}

	i := 0
	j := 1

	count := 1
	for j < len(arr) {
		if arr[i] == arr[j] {
			j++
		} else {
			count++
			i = j
			j++
		}
	}
	return count
}
