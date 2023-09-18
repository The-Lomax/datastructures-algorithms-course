package sorting

func quickSort(arr []int, start, end int) {
	if start < end {
		pivot := getPivot(arr, start, end)

		quickSort(arr, start, pivot-1)
		quickSort(arr, pivot+1, end)
	}
}

func getPivot(arr []int, start, end int) int {
	pivot := arr[start]
	swapIndex := start
	i := start
	for i <= end {
		if arr[i] < pivot {
			swapIndex++
			swap(arr, i, swapIndex)
		}
		i++
	}
	swap(arr, start, swapIndex)
	return swapIndex
}
