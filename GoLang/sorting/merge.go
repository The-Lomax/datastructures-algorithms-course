package sorting

func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}
	pivot := len(arr) / 2
	return mergeArrays(mergeSort(arr[:pivot]), mergeSort(arr[pivot:]))
}
